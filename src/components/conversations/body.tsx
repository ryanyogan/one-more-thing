"use client";

import { useConversation } from "@/hooks/use-conversation";
import { FullMessageType } from "@/types";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import MessageBox from "../messages/message-box";

interface BodyProps {
  initialMessages: FullMessageType[];
}

export default function Body({ initialMessages }: BodyProps) {
  const [messages, setMessages] = useState(initialMessages);
  const bottomRef = useRef<HTMLDivElement>(null);

  const { conversationId } = useConversation();

  useEffect(() => {
    axios.post(`/api/conversations/${conversationId}/seen`);
  }, [conversationId]);

  return (
    <div className="flex-1 overflow-y-auto">
      {messages.map((message, idx) => (
        <MessageBox
          isLast={idx === messages.length - 1}
          key={message.id}
          data={message}
        />
      ))}
      <div ref={bottomRef} className="pt-24" />
    </div>
  );
}
