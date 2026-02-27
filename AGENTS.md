# AGENTS.md — Next.js Fullstack Template

## Project Overview

Production-ready fullstack template with Next.js 16, tRPC v11, Better Auth, Prisma 7, and more.

## Architecture

- **Framework**: Next.js 16 App Router (TypeScript strict)
- **API**: tRPC v11 with `@trpc/tanstack-react-query` (NOT legacy `@trpc/react-query`)
- **Auth**: Better Auth with database sessions, email/password
- **Database**: Prisma 7+ with Neon adapter (`@prisma/adapter-neon`)
- **i18n**: next-intl with `localePrefix: 'never'` (no URL prefix)
- **State**: Zustand (client) + nuqs (URL state)
- **Forms**: react-hook-form + zod (MANDATORY for all forms)
- **Background Jobs**: Inngest (durable functions, cron, retries)
- **Email**: Resend
- **AI**: Vercel AI SDK
- **File Storage**: Vercel Blob
- **Env Validation**: T3 Env (`@t3-oss/env-nextjs`)

## Key Patterns

### Data Fetching
- ✅ Server Components for initial data fetch (prefetch + HydrationBoundary)
- ✅ TanStack Query (via tRPC) for all client-side fetching
- ❌ NEVER use useState + fetch + useEffect

### Forms
- ✅ react-hook-form + zod + shadcn/ui Form components
- ❌ NEVER use manual useState for form inputs

### Prisma
- Import client from `@/generated/prisma` (NOT `@prisma/client`)
- Singleton in `src/server/db/index.ts`
- Config in `prisma.config.ts`

### tRPC
- Server proxy: `src/trpc/server.ts` (prefetching in RSC)
- Client provider: `src/trpc/client.tsx`
- Routers: `src/trpc/routers/`

### i18n
- No `[locale]` segment in URLs
- Locale detected via cookie → Accept-Language header → default
- Messages in `messages/` directory

## Git Workflow

- Feature branches for every change
- Conventional commits (`feat:`, `fix:`, etc.)
- Never push directly to main
- npm (not pnpm/yarn)

## Documentation

- `README.md` — in root
- `AGENTS.md` — in root
- `docs/` — all other project docs
