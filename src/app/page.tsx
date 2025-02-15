"use client"

import { Header } from "@/components/Header/Header";
import { Sidenav } from "@/components/sideNav/SideNav";
import { useState } from "react";
import DashBoard from "./Pages/DashBoard/DashBoard";
import Weather from "./Pages/Service/Weather/weather";
import Traffic from "./Pages/Service/Traffic/Traffic";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <Sidenav setIsOpen={setIsOpen} isOpen={isOpen} /> 
      <div className={`flex flex-col w-full ${isOpen ? "pl-60" : "pl-14"}`}>
      <Header/>
      {/* <DashBoard/> */}
      {/* <Weather /> */}
      <Traffic />
      </div>
    </div>
  )
}
