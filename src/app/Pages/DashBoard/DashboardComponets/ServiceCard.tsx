import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carosel";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/Chart";
import { CircleParking, Cloudy, Flower2, Trash2 } from "lucide-react";
import { TrendingUp } from "lucide-react";
import React from "react";
import { Label, Pie, PieChart } from "recharts";



export function ServiceCard() {

  return (
  
    <Carousel
      opts={{
        align: "start",
      }}
      className="max-w-3xl h-fit"
    >
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:1/6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Weather</CardTitle>
              {/* <DollarSign className="h-4 w-4 text-muted-foreground" /> */}
              <Cloudy className="size-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">North 0 mph</div>
              <p className="text-xs text-muted-foreground">clear sky</p>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:1/6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Parked Vechicles
              </CardTitle>
              <CircleParking className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">17</div>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:1/6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Lawn Care Service
              </CardTitle>
              <Flower2 className="size-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">NO</div>
              <p className="text-xs text-muted-foreground">
                Last done 1 year, 5 months ago
              </p>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:1/6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Garbage Service
              </CardTitle>
              <Trash2 className="size-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">NO</div>
              <p className="text-xs text-muted-foreground">
                Last done 2 months, 2 weeks ago
              </p>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:1/6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Garbage Service
              </CardTitle>
              <Trash2 className="size-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">NO</div>
              <p className="text-xs text-muted-foreground">
                Last done 2 months, 2 weeks ago
              </p>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
   
      <CarouselPrevious className="animate-pulse" />
      <CarouselNext className="animate-pulse"  />
    </Carousel>

  );
}

export default ServiceCard;
