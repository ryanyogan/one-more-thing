import { getCurrentUser } from "@/actions/get-current-user";
import { db } from "@/app/lib/prisma";
import { pusherServer } from "@/app/lib/pusher";
import { NextResponse } from "next/server";

interface IParams {
  conversationId: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  try {
    const currentUser = await getCurrentUser();
    const { conversationId } = params;

    if (!currentUser?.id || !currentUser.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const conversation = await db.conversation.findUnique({
      where: {
        id: conversationId,
      },
      include: {
        users: true,
      },
    });

    if (!conversation) {
      return new NextResponse("Invalid ID", { status: 400 });
    }

    const deletedConveration = await db.conversation.deleteMany({
      where: {
        id: conversationId,
        userIds: {
          hasSome: [currentUser.id],
        },
      },
    });

    conversation.users.forEach((user) => {
      if (user.email) {
        pusherServer.trigger(user.email, "conversation:remove", conversation);
      }
    });

    return NextResponse.json(deletedConveration);
  } catch (error: any) {
    console.error(error.message);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
