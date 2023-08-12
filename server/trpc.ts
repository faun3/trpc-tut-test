import { initTRPC } from "@trpc/server";

// initialize the tRPC backend
//
// WARNING: you only need to do this once per backend ! ! !
const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;
