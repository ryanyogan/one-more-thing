"use client";

import { useActiveChannel } from "@/hooks/use-active-channel";

export default function ActiveStatus() {
  useActiveChannel();

  return null;
}
