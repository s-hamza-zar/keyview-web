import { Container } from "@/components/ui/Container";
import React from "react";
import ServiceCard from "./DashboardComponets/ServiceCard";
import TrafficCard from "./DashboardComponets/TrafficCard";
import VideoCard from "./DashboardComponets/VideoCard";
import ActivityLog from "./DashboardComponets/ActivityLog";
import CameraLogs from "./DashboardComponets/CameraLogs";

const DashBoard = () => {
  return (
    <>
      <div className="mx-auto max-w-6xl my-12">
        <div className="grid grid-cols-4 gap-12">
          <div className="col-span-3">
            <ServiceCard />
            <VideoCard />
          </div>
          {/* <div className="col-span-1"></div> */}
          <div className="col-span-1">
            <TrafficCard />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <div className="col-span-1">
            <ActivityLog />
          </div>
          <div className="col-span-1">
            <CameraLogs />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
