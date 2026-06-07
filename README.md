# saiteja.live

Personal portfolio for Sai Teja Madireddy — Digital Commerce Architect specializing in luxury commerce, PIM, search, DAM, and composable digital platforms.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Import this repository into [Vercel](https://vercel.com).
2. Set the production domain to `saiteja.live`.
3. Contact form env vars ([Resend](https://resend.com)):
   - `RESEND_API_KEY` — API key from your Resend dashboard
   - `CONTACT_TO_EMAIL` — inbox that receives submissions (defaults to `site.email`)
   - `CONTACT_FROM_EMAIL` — sender address (`onboarding@resend.dev` for testing; use `contact@saiteja.live` after domain verification)

Create `.env.local` with the same variables for local testing.

## Content

All site copy, expertise domains, and platform listings live in [`lib/site.ts`](lib/site.ts).
