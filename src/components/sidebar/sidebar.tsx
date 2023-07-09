import MobileFooter from "../ui/mobile-footer";
import DesktopSidebar from "./desktop-sidebar";

export default async function Sidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <DesktopSidebar />
      <MobileFooter />
      <main className="h-full lg:pl-20">{children}</main>
    </div>
  );
}
