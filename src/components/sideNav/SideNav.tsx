"use-client";
import { ArrowLeftFromLine, ArrowRightFromLine, LogOut, Power } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "./menuConfig";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

export function Sidenav({ setIsOpen, isOpen }: any) {
  return (
    <aside
      className={`inset-y fixed  left-0 z-20 flex h-full flex-col border-r ${
        isOpen ? "w-60" : "w-14"
      }`}
    >
      <div className="p-2 flex items-center">
        <Button variant="outline" size="icon" aria-label="Home">
          <Image
            className="w-1/2"
            src="/keyview-logo-header.png"
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </Button>
        {isOpen && <h1 className="px-4 text-xl font-semibold">KeyView.Ai</h1>}
      </div>
      <nav className="grid gap-1 p-2 mt-2">
        {Menu.map(({ title, icon }) => {
          return (
            <>
              {isOpen ? (
                <>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2  hover:text-muted-foreground"
                  >
                    {icon}
                    {title}
                  </Link>
                </>
              ) : (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        // bg-muted
                        className="rounded-lg"
                        aria-label={title}
                      >
                        {icon}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right" sideOffset={5}>
                      {title}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </>
          );
        })}
      </nav>
      <nav className="mt-auto grid gap-1 p-2 mb-6">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                // bg-muted
                className="rounded-lg"
                aria-label="Expand"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <ArrowLeftFromLine className="size-5" />
                ) : (
                  <ArrowRightFromLine className="size-5" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              {isOpen ? 'Collapse': 'Expand'}
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                // bg-muted
                className="rounded-lg"
                aria-label="Logout"
                // onClick={() => setIsOpen(!isOpen)}
              >
              
                  <Power className="size-5" />
             
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Logout
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  );
}
