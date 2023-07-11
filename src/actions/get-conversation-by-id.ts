import { db } from "@/app/lib/prisma";
import { getCurrentUser } from "./get-current-user";

export async function getConversationById(conversationId: string) {
  const currentUser = await getCurrentUser();
  if (!currentUser?.id) {
    return null;
  }

  try {
    const conversation = await db.conversation.findUnique({
      where: {
        id: conversationId,
      },
      include: {
        users: true,
      },
    });

    return conversation;
  } catch (error: any) {
    return null;
  }
}
