import { getConversations } from "@/actions/get-conversations";
import ConversationList from "@/components/conversations/conversation-list";
import Sidebar from "@/components/sidebar/sidebar";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
}
