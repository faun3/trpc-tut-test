import { initTRPC } from "@trpc/server";
import { publicProcedure, router } from "./trpc";
import { db } from "./db";

const appRouter = router({
  userList: publicProcedure.query(async () => {
    const users = await db.user.findMany();
    return users;
  }),
});

export type AppRouter = typeof appRouter;
