"use client"

import { Header } from "@/components/Header";
import { Sidenav } from "@/components/SideNav";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid h-screen w-full pl-[56px]">
     <Sidenav isOpen={isOpen}/> 
      <div className="flex flex-col">
      <Header setIsOpen={setIsOpen} isOpen={isOpen}/>
      </div>
    </div>
  )
}
