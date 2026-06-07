"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormResult = {
  success: boolean;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const fields = ["name", "email", "subject"] as const;

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<FormResult | null>(null);
  const [focused, setFocused] = useState<string | null>(null);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await response.json()) as FormResult;
      setResult(data);

      if (data.success) {
        setForm(initialState);
      }
    } catch {
      setResult({
        success: false,
        message: "Something went wrong. Try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-shell">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          lead="c"
          trail="ontact"
          id="contact"
          subtitle="Architecture · Integrations · Advisory"
        />

        <m.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="subheader mb-4"
        >
          Interested in composable commerce, platform integrations, or
          architecture advisory? I&apos;d love to hear from you.
        </m.p>
        <m.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-8 text-sm text-white/65 sm:mb-10"
        >
          Prefer email?{" "}
          <a
            href={`mailto:${site.email}`}
            className="underline decoration-[var(--accent)] underline-offset-4 transition hover:text-white"
          >
            {site.email}
          </a>
        </m.p>

        <AnimatePresence mode="wait">
          {result ? (
            <m.div
              key={result.message}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`mb-8 rounded-2xl border px-5 py-4 text-sm ${
                result.success
                  ? "border-green-300/40 bg-green-500/10 text-green-100"
                  : "border-red-300/40 bg-red-500/10 text-red-100"
              }`}
            >
              {result.message}
            </m.div>
          ) : null}
        </AnimatePresence>

        <m.form
          onSubmit={onSubmit}
          className="glass-card space-y-5 rounded-3xl p-5 sm:space-y-6 sm:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {fields.map((field, index) => (
            <m.div
              key={field}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <label
                htmlFor={field}
                className={`mb-2 block text-xs uppercase tracking-[0.2em] transition ${
                  focused === field ? "text-[var(--accent)]" : "text-white/55"
                }`}
              >
                {field}
              </label>
              <input
                id={field}
                name={field}
                type={field === "email" ? "email" : "text"}
                value={form[field]}
                onChange={onChange}
                onFocus={() => setFocused(field)}
                onBlur={() => setFocused(null)}
                required
                className="input-glow w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-base text-white outline-none transition sm:text-sm"
                placeholder={`Enter your ${field}`}
              />
            </m.div>
          ))}

          <m.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24 }}
          >
            <label
              htmlFor="message"
              className={`mb-2 block text-xs uppercase tracking-[0.2em] transition ${
                focused === "message" ? "text-[var(--accent)]" : "text-white/55"
              }`}
            >
              message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={onChange}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              required
              className="input-glow w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-base text-white outline-none transition sm:text-sm"
              placeholder="Enter your message"
            />
          </m.div>

          <m.button
            type="submit"
            disabled={loading}
            whileTap={{ scale: 0.97 }}
            className="btn-primary-glow w-full rounded-full px-8 py-3.5 text-xs uppercase tracking-[0.2em] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:text-sm"
          >
            {loading ? "Submitting..." : "Send message"}
          </m.button>
        </m.form>
      </div>
    </section>
  );
}
