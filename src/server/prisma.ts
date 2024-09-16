/**
 * Instantiates a single instance PrismaClient and save it on the global object.
 * @link https://www.prisma.io/docs/support/help-articles/nextjs-prisma-client-dev-practices
 */
import { env } from './env';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

const prismaGlobal = globalThis as typeof globalThis & {
  prisma?: any;
};

export const prisma =
  prismaGlobal.prisma ??
  new PrismaClient({
    log:
      env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  }).$extends(withAccelerate());

if (env.NODE_ENV !== 'production') {
  prismaGlobal.prisma = prisma;
}
