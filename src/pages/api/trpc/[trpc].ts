/**
 * This file contains tRPC's HTTP response handler
 */
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { NextRequest } from 'next/server';
import { createContextEdge } from '~/server/context';
import { appRouter } from '~/server/routers/_app';

// We're using the edge-runtime
export const config = {
  runtime: 'edge',
};

// export API handler
export default async function handler(req: NextRequest) {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    router: appRouter,
    req,
    createContext: createContextEdge,
  });
}
