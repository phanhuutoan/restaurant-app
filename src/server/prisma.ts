/**
 * Instantiates a single instance PrismaClient and save it on the global object.
 * @link https://www.prisma.io/docs/support/help-articles/nextjs-prisma-client-dev-practices
 */
import { neonConfig, Pool } from '@neondatabase/serverless';
import { env } from './env';
import { PrismaClient } from '@prisma/client';
import ws from 'ws';
import { PrismaNeon } from '@prisma/adapter-neon';

neonConfig.webSocketConstructor = ws;
const connectionString = `${env.DATABASE_URL}`;
console.log('CONNECTING TO DATABASE:', connectionString);

const pool = new Pool({ connectionString });
const adapter = new PrismaNeon(pool);

const prismaGlobal = globalThis as typeof globalThis & {
  prisma?: PrismaClient;
};

export const prisma: PrismaClient =
  prismaGlobal.prisma ??
  new PrismaClient({
    adapter: adapter,
    log:
      env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (env.NODE_ENV !== 'production') {
  prismaGlobal.prisma = prisma;
}
