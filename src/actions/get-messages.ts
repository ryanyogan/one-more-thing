import { db } from "@/app/lib/prisma";
import { getCurrentUser } from "./get-current-user";

export async function getMessages(conversationId: string) {
  const currentUser = await getCurrentUser();
  if (!currentUser?.id) {
    return [];
  }

  try {
    const messages = await db.message.findMany({
      where: {
        conversationId,
      },
      include: {
        sender: true,
        seen: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return messages;
  } catch (error: any) {
    return [];
  }
}
