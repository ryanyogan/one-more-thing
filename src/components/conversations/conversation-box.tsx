"use client";

import { FullConversationType } from "@/types";

interface ConversationBoxProps {
  data: FullConversationType;
  selected?: boolean;
}

export default function ConversationBox({
  data,
  selected,
}: ConversationBoxProps) {
  return <div>ConversationBox</div>;
}
