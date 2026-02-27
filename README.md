# Next.js Fullstack Template

A production-ready fullstack template built with modern technologies and best practices.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 4 |
| Components | shadcn/ui + Lucide React |
| API Layer | tRPC v11 |
| Data Fetching | TanStack Query 5 (via tRPC) |
| Forms | react-hook-form + zod |
| URL State | nuqs 2 |
| Client State | Zustand 5 |
| Auth | Better Auth |
| Database | Prisma 7 + Neon (PostgreSQL) |
| Email | Resend |
| AI | Vercel AI SDK |
| File Storage | Vercel Blob |
| i18n | next-intl |
| Background Jobs | Inngest |
| Env Validation | T3 Env |

## Getting Started

### Prerequisites

- Node.js 20+
- npm
- A [Neon](https://neon.tech) database

### Setup

1. **Clone the repository:**

```bash
git clone https://github.com/ivanmeda/nextjs-fullstack-template.git
cd nextjs-fullstack-template
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set up environment variables:**

```bash
cp .env.example .env.local
```

Fill in all required values in `.env.local`.

4. **Generate Prisma client:**

```bash
npx prisma generate
```

5. **Push database schema:**

```bash
npx prisma db push
```

6. **Run the development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Optional: Inngest Dev Server

```bash
npm run inngest:dev
```

## Folder Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (auth)/             # Auth pages (sign-in, sign-up, etc.)
│   ├── (dashboard)/        # Protected pages with sidebar layout
│   ├── (marketing)/        # Public pages (pricing, etc.)
│   └── api/                # API routes (tRPC, auth, chat, upload, inngest)
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── forms/              # Form components (react-hook-form + zod)
│   ├── layout/             # Layout components (header, sidebar)
│   ├── providers/          # Context providers wrapper
│   └── shared/             # Shared components (skeletons, error boundary)
├── server/
│   ├── db/                 # Prisma client singleton
│   ├── auth/               # Better Auth config + client
│   └── email/              # Resend email service
├── trpc/
│   ├── init.ts             # tRPC initialization + procedures
│   ├── client.tsx          # Client-side tRPC provider
│   ├── server.ts           # Server-side tRPC proxy
│   ├── query-client.ts     # Shared QueryClient factory
│   └── routers/            # tRPC routers (post, ai)
├── inngest/
│   ├── client.ts           # Inngest client
│   └── functions/          # Background functions
├── i18n/                   # next-intl configuration
├── stores/                 # Zustand stores
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities, validators, constants
└── types/                  # Global TypeScript types
```

## Environment Variables

See `.env.example` for all required variables. Key categories:

- **Database**: `DATABASE_URL`, `DIRECT_URL` (Neon)
- **Auth**: `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL`
- **Email**: `RESEND_API_KEY`, `EMAIL_FROM`
- **AI**: `OPENAI_API_KEY` or `AI_GATEWAY_API_KEY`
- **Storage**: `BLOB_READ_WRITE_TOKEN`
- **Inngest**: `INNGEST_EVENT_KEY`, `INNGEST_SIGNING_KEY` (auto-set on Vercel)
- **App**: `NEXT_PUBLIC_APP_URL`

Set `SKIP_ENV_VALIDATION=1` for Docker builds or CI.

## Key Patterns

### tRPC + TanStack Query

- Server prefetch in RSC → `HydrationBoundary` → client consumes with `useQuery`
- Shared zod schemas between tRPC input and form validation
- Protected procedures for authenticated routes

### i18n

- `localePrefix: 'never'` — no URL prefix, locale via cookie/header
- `messages/en.json` + `messages/sr.json`

### Auth

- Better Auth with email/password + email verification
- Database sessions (not JWT)
- Cookie-based middleware protection

## Scripts

```bash
npm run dev          # Start dev server (Turbopack)
npm run build        # Production build
npm run lint         # Run ESLint
npm run format       # Format with Prettier
npm run typecheck    # TypeScript type check
npm run spellcheck   # Run cspell
npm run inngest:dev  # Start Inngest Dev Server
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import in Vercel
3. Set environment variables
4. Deploy

### Manual

```bash
npm run build
npm start
```

## License

MIT
