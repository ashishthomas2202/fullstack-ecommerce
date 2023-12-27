import { router, publicProcedure } from "./trpc";

export const appRouter = router({
  anyApiRoute: publicProcedure.query(() => {
    return "Hello World";
  }),
});

export type AppRouter = typeof appRouter;
