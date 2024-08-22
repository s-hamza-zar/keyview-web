import { Container } from "@/components/ui/Container";
import React from "react";
import ServiceCard from "./DashboardComponets/ServiceCard";
import TrafficCard from "./DashboardComponets/TrafficCard";
import VideoCard from "./DashboardComponets/VideoCard";

const DashBoard = () => {
  return (
    <>
      <div className="mx-auto mt-12 flex  gap-24">
        <div>


        <ServiceCard />
        <VideoCard />
        </div>
        <div className="w-[20%]">
          <TrafficCard />
        </div>
      </div>
    </>
  );
};

export default DashBoard;
