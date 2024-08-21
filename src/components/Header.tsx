"use-client";
import {
  ArrowLeftFromLine,
  ArrowRightFromLine,
  Bird,
  Book,
  Bot,
  Code2,
  CornerDownLeft,
  LifeBuoy,
  Mic,
  Paperclip,
  Rabbit,
  Settings,
  Settings2,
  Share,
  SquareTerminal,
  SquareUser,
  Triangle,
  Turtle,
} from "lucide-react";

//   import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/Button";
//   import {
//     Drawer,
//     DrawerContent,
//     DrawerDescription,
//     DrawerHeader,
//     DrawerTitle,
//     DrawerTrigger,
//   } from "@/components/ui/drawer"
//   import { Input } from "@/components/ui/input"
//   import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ModeToggle } from "./ModeToggle";
import { UserSettings } from "./UserSettings";
import { useState } from "react";

export function Header({ setIsOpen, isOpen }: any) {
  return (
    <header className="sticky top-0 z-10 flex h-[54px] items-center gap-1 border-b bg-background px-4">
      <div className="mr-auto gap-1.5">
        <Button
          variant="ghost"
          size="icon"
          className="mt-auto rounded-lg"
          aria-label="Expand"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <ArrowLeftFromLine className="size-5" />
          ) : (
            <ArrowRightFromLine className="size-5" />
          )}
        </Button>
      </div>

      <div className="flex ml-auto gap-1.5">
        <ModeToggle />
        <div className="ml-2">
          <UserSettings />
        </div>
      </div>
    </header>
  );
}
