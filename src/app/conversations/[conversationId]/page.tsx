import { getConversationById } from "@/actions/get-conversation-by-id";
import { getMessages } from "@/actions/get-messages";
import Body from "@/components/conversations/body";
import Header from "@/components/conversations/header";
import MessageForm from "@/components/conversations/message-form";
import EmptyState from "@/components/ui/empty-state";

interface IParams {
  conversationId: string;
}

export default async function ConversationPage({
  params,
}: {
  params: IParams;
}) {
  const [conversation, messages] = await Promise.all([
    getConversationById(params.conversationId),
    getMessages(params.conversationId),
  ]);

  if (!conversation) {
    return (
      <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
          <EmptyState />
        </div>
      </div>
    );
  }

  return (
    <div className="lg:pl-80 h-full">
      <div className="h-full flex flex-col">
        <Header conversation={conversation} />

        <Body initialMessages={messages} />

        <MessageForm />
      </div>
    </div>
  );
}
