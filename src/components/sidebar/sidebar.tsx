import { getCurrentUser } from "@/actions/get-current-user";
import MobileFooter from "../ui/mobile-footer";
import DesktopSidebar from "./desktop-sidebar";

export default async function Sidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <div className="h-full">
      <DesktopSidebar currentUser={currentUser!} />
      <MobileFooter />
      <main className="h-full lg:pl-20">{children}</main>
    </div>
  );
}
