"use client";

import { UseConversation } from "@/hooks/use-conversation";
import { useRoutes } from "@/hooks/use-routes";
import MobileItem from "./mobile-item";

export default function MobileFooter() {
  const routes = useRoutes();
  const { isOpen } = UseConversation();

  if (isOpen) {
    return null;
  }

  return (
    <div className="fixed justify-between w-full bottom-0 z-40 flex items-center bg-white border-t-[1px] lg:hidden">
      {routes.map((route) => (
        <MobileItem
          href={route.href}
          label={route.label}
          active={route.active}
          key={route.href}
          icon={route.icon}
          onClick={route.onClick}
        />
      ))}
    </div>
  );
}
