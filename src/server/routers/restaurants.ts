/**
 *
 * This is an example router, you can delete this file and then update `../pages/api/trpc/[trpc].tsx`
 */
import { router, publicProcedure } from '../trpc';
// import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { prisma } from '~/server/prisma';

/**
 * Default selector for Post.
 * It's important to always explicitly say which fields you want to return in order to not leak extra information
 * @link https://github.com/prisma/prisma/issues/9353
 */

export const restaurantRouter = router({
  getRestaurants: publicProcedure
    .input(
      z.object({
        category: z.string(),
      }),
    )
    .query(async ({ input }) => {
      const restaurants = await prisma.restaurant.findMany({
        where: {
          category: input.category,
        },
        orderBy: {
          id: 'desc',
        },
      });
      return restaurants;
    }),

  addFavorite: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      const restaurant = await prisma.restaurant.findUnique({
        where: { id: input.id },
      });
      await prisma.restaurant.update({
        where: {
          id: input.id,
        },
        data: {
          isFavorite: !restaurant?.isFavorite,
        },
      });
      return {
        status: 'success',
      };
    }),
});
