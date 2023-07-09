import { db } from "@/app/lib/prisma";
import { getSession } from "./get-session";

export async function getCurrentUser() {
  try {
    const session = await getSession();
    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await db.user.findUnique({
      where: {
        email: session.user.email,
      },
    });
    if (!currentUser) {
      return null;
    }

    return currentUser;
  } catch (error: any) {
    return null;
  }
}
