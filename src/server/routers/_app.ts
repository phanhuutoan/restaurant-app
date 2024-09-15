/**
 * This file contains the root router of your tRPC-backend
 */
import { createCallerFactory, publicProcedure, router } from '../trpc';
import { restaurantRouter } from './restaurants';

export const appRouter = router({
  healthcheck: publicProcedure.query(() => "yay! I' m fine"),

  restaurant: restaurantRouter,
});

export const createCaller = createCallerFactory(appRouter);

export type AppRouter = typeof appRouter;
