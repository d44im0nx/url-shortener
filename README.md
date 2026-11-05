# URL Shortener

A server-rendered URL shortener built with Next.js, Prisma, and Neon PostgreSQL. Users can create custom short links, view visit counts, and delete links from the dashboard.

## Features

- Create custom short links (3-30 characters: letters, numbers, dashes, and underscores)
- Server-side redirects with visit tracking
- Dashboard listing with copy, open, refresh, and delete actions
- Responsive UI with light/dark theme support
- Persistence in Neon PostgreSQL through Prisma

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript 6**
- **Prisma 7** with the Neon serverless adapter
- **Tailwind CSS 4**
- **Radix UI** and **Lucide React**

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file from `.env.example` and set your Neon connection strings:

```env
DATABASE_URL="postgresql://user:password@host-pooler.region.aws.neon.tech/neondb?sslmode=require"
DATABASE_URL_UNPOOLED="postgresql://user:password@host.region.aws.neon.tech/neondb?sslmode=require"
```

`DATABASE_URL` (the pooled connection) is required at runtime. `DATABASE_URL_UNPOOLED` is optional and is used for migrations when present.

3. Apply migrations and start the development server:

```bash
npx prisma migrate deploy
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Generate Prisma Client and build for production |
| `npm run build:production` | Apply pending migrations, generate Prisma Client, and build |
| `npm start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm test` | Run Jest |

## Deploying to Vercel

Set at least `DATABASE_URL` in the Vercel project environment variables. `DATABASE_URL_UNPOOLED` is optional; migrations fall back to `DATABASE_URL` when it is not set.

Use Node.js 24 (see `.nvmrc`). If you want migrations to run during deployment, set the Vercel build command to `npm run build:production`; otherwise run `npx prisma migrate deploy` separately and use `npm run build`.

Created by **Azis Fathur Rahman**
