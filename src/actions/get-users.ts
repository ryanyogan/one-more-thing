import { db } from "@/app/lib/prisma";
import { getSession } from "./get-session";

export async function getUsers() {
  const session = await getSession();

  if (!session?.user?.email) {
    return [];
  }

  try {
    const users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        NOT: {
          email: session.user.email,
        },
      },
    });

    return users;
  } catch (_error: any) {
    return [];
  }
}
