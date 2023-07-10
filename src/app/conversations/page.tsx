"use client";

import EmptyState from "@/components/ui/empty-state";
import { useConversation } from "@/hooks/use-conversation";
import clsx from "clsx";

export default function Conversations() {
  const { isOpen } = useConversation();

  return (
    <div
      className={clsx("lg:pl-80 h-full lg:block", isOpen ? "block" : "hidden")}
    >
      <EmptyState />
    </div>
  );
}
