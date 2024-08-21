import {
  Bell,
  BellPlus,
  Book,
  Bot,
  CircleParking,
  Cloudy,
  Code2,
  FilePenLine,
  Home,
  LandPlot,
  LifeBuoy,
  Mails,
  Settings2,
  SquareTerminal,
  SquareUser,
  TrafficCone,
  Triangle,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import Image from "next/image";
import { useState } from "react";

export function Sidenav({isOpen}:{isOpen:boolean}) {
  return (
    <aside className={`inset-y fixed  left-0 z-20 flex h-full flex-col border-r ${isOpen? 'w-64' : 'w-14'}`}>
      <div className="border-b p-2">
        <Button variant="outline" size="icon" aria-label="Home">
          <Image
          className="w-1/2"
            src="/keyview-logo-header.png"
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </Button>
      </div>
      <nav className="grid gap-1 p-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg bg-muted"
                aria-label="DashBoard"
              >
                <Home className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              DashBoard
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg"
                aria-label="Weather"
              >
                <Cloudy className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Weather
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg"
                aria-label="API"
              >
                <TrafficCone className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Traffic
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg"
                aria-label="Parking"
              >
                <CircleParking className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Parking
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg"
                aria-label="Emails"
              >
                <FilePenLine className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
            Reports
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg"
                aria-label="Emails"
              >
                <Mails className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
            Emails
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
      <nav className="mt-auto grid gap-1 p-2 mb-6">
        <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="mt-auto rounded-lg"
                aria-label="Notification"
              >
                <BellPlus className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
            Target Notification
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="mt-auto rounded-lg"
                aria-label="Manage Users"
              >
                <Users className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
            Manage Users
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="mt-auto rounded-lg"
                aria-label="Manage Properties"
              >
                <LandPlot className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Manage Properties
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  );
}
