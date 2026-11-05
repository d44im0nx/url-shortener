import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    // Prefer the direct connection for migrations, but fall back to the
    // pooled URL so deployments only need DATABASE_URL configured.
    url:
      process.env.DATABASE_URL_UNPOOLED ??
      process.env.DATABASE_URL ??
      '',
  },
});
