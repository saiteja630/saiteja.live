import { NextResponse } from "next/server";
import { site } from "@/lib/site";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  website?: string;
};

const LIMITS = {
  name: 100,
  email: 254,
  subject: 200,
  message: 5000,
} as const;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function stripControlChars(value: string) {
  return value.replace(/[\r\n\u0000-\u001f\u007f]/g, " ").trim();
}

function allowedHosts(): Set<string> {
  const hosts = new Set<string>();
  try {
    const primary = new URL(site.url).hostname;
    hosts.add(primary);
    hosts.add(primary.startsWith("www.") ? primary.slice(4) : `www.${primary}`);
  } catch {
    // site.url is static; ignore parse failures
  }
  hosts.add("localhost");
  hosts.add("127.0.0.1");
  if (process.env.VERCEL_URL) {
    hosts.add(process.env.VERCEL_URL.replace(/^https?:\/\//, ""));
  }
  return hosts;
}

function isAllowedOrigin(request: Request): boolean {
  const allowed = allowedHosts();
  const origin = request.headers.get("origin");
  if (origin) {
    try {
      return allowed.has(new URL(origin).hostname);
    } catch {
      return false;
    }
  }

  const referer = request.headers.get("referer");
  if (referer) {
    try {
      return allowed.has(new URL(referer).hostname);
    } catch {
      return false;
    }
  }

  // Browsers always send Origin on cross-site fetch; same-origin POSTs
  // from our form include Origin. Reject requests with neither.
  return false;
}

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json(
      { success: false, message: "Forbidden." },
      { status: 403 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  // Honeypot — bots fill hidden fields; pretend success without sending.
  if (payload.website?.trim()) {
    return NextResponse.json({
      success: true,
      message: "Thank you. Your message has been sent.",
    });
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const subject = stripControlChars(payload.subject?.trim() ?? "");
  const message = payload.message?.trim() ?? "";

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { success: false, message: "Please complete all required fields." },
      { status: 400 },
    );
  }

  if (
    name.length > LIMITS.name ||
    email.length > LIMITS.email ||
    subject.length > LIMITS.subject ||
    message.length > LIMITS.message
  ) {
    return NextResponse.json(
      { success: false, message: "One or more fields exceed the allowed length." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { success: false, message: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const contactTo = process.env.CONTACT_TO_EMAIL ?? site.email;
  const contactFrom =
    process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!resendApiKey) {
    return NextResponse.json(
      {
        success: false,
        message: `Email delivery is not configured. Please reach out directly at ${site.email}.`,
      },
      { status: 503 },
    );
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: contactFrom,
        to: [contactTo],
        reply_to: email,
        subject: `Portfolio inquiry: ${subject}`,
        html: `
          <h2>New contact form submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        `,
      }),
    });

    if (!response.ok) {
      throw new Error("Resend request failed");
    }

    return NextResponse.json({
      success: true,
      message: "Thank you. Your message has been sent.",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: `Unable to send email right now. Please contact me directly at ${site.email}.`,
      },
      { status: 500 },
    );
  }
}
