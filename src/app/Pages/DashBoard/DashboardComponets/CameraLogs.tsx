import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Image from "next/image";
import React from "react";
import VideoCard from "./VideoCard";
import { Badge } from "@/components/ui/Badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";

const CameraLogs = () => {
  return (
    <Card className="overflow-hidden mt-12">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            Granite Hills
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="rounded-lg" aria-label={"Active camera"}>
                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                      4
                    </Badge>
                  </span>
                </TooltipTrigger>
                <TooltipContent side="top" sideOffset={5}>
                  Active camera
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <VideoCard />
          <div className="grid grid-cols-3 gap-2">
              <VideoCard />
              <VideoCard />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CameraLogs;
