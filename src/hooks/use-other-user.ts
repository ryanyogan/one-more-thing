import { FullConversationType } from "@/types";
import { User } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useMemo } from "react";

export function useOtherUser(
  conversation:
    | FullConversationType
    | {
        users: User[];
      }
) {
  const session = useSession();

  const otherUser = useMemo(() => {
    const currentUserEmail = session?.data?.user?.email;

    return conversation.users.filter((user) => user.email !== currentUserEmail);
  }, [session?.data?.user, conversation.users]);

  return otherUser[0];
}
