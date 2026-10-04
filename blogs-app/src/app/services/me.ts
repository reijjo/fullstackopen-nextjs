import { db } from "@/db";
import { users } from "@/db/schema";
import { getCurrentUser } from "./session";
import { eq } from "drizzle-orm";

export const createToken = async () => {
  const token = crypto.randomUUID();
  const user = await getCurrentUser();
  if (!user) {
    throw new Error("Not logged in");
  }

  await db.update(users).set({ token }).where(eq(users.id, user.id));
};

export const getMe = async (token: string) => {
  const user = await db.query.users.findFirst({
    where: eq(users.token, token),
    with: { blogs: true },
  });

  if (!user) {
    return null;
  }

  return user;
};
