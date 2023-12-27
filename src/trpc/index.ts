import { authRouter } from "./auth-router";
import { router, publicProcedure } from "./trpc";

export const appRouter = router({
  anyApiRoute: publicProcedure.query(() => {
    return "Hello World";
  }),
  auth: authRouter,
});

export type AppRouter = typeof appRouter;
