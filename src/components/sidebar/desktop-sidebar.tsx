"use client";

import { useRoutes } from "@/hooks/use-routes";
import { User } from "@prisma/client";
import { useState } from "react";
import Avatar from "./avatar";
import DesktopItem from "./desktop-item";

interface DesktopSidebarProps {
  currentUser: User;
}

export default function DesktopSidebar({ currentUser }: DesktopSidebarProps) {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-20 lg:w-20 lg:px-6 lg:overflow-y-auto lg:bg-white lg:border-r-[1px] lg:pb-4 lg:flex lg:flex-col justify-between">
      <nav className="mt-4 flex flex-col justify-between">
        <ul className="flex flex-col items-center space-y-1" role="list">
          {routes.map((route) => (
            <DesktopItem
              key={route.label}
              href={route.href}
              label={route.label}
              icon={route.icon}
              active={route.active}
              onClick={route.onClick}
            />
          ))}
        </ul>
      </nav>

      <nav className="mt-4 flex flex-col justify-between items-center">
        <div
          className="cursor-pointer hover:opacity-75 transition"
          onClick={() => setIsOpen(true)}
        >
          <Avatar user={currentUser} />
        </div>
      </nav>
    </div>
  );
}
