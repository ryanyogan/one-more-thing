import { getConversations } from "@/actions/get-conversations";
import { getUsers } from "@/actions/get-users";
import ConversationList from "@/components/conversations/conversation-list";
import Sidebar from "@/components/sidebar/sidebar";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [conversations, users] = await Promise.all([
    getConversations(),
    getUsers(),
  ]);

  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList users={users} initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
}
