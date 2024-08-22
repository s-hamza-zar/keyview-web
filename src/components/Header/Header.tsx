"use-client";
import { MapPinHouse } from "lucide-react";
import { ModeToggle } from "../ModeToggle";
import { Badge } from "../ui/Badge";
import { UserSettings } from "../UserSettings";
import PropertySelector from "./PropertySelector";
import PropertyBadge from "./PropertyBadge";
import { useTheme } from "next-themes";

export function Header() {
  return (
    <header
      className={`sticky top-0 z-10 flex h-[60px] items-center border-b
     `}
    >
      <div className="ml-4">
        <PropertyBadge />
      </div>
      <div className="flex ml-auto gap-1.5 mr-4">
        <PropertySelector />
        <ModeToggle />
        <UserSettings />
      </div>
    </header>
  );
}
