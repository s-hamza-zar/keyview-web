import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/Chart";
import { DatePickerDemo } from "@/components/ui/DatePicker";
import React from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";
import WeatherTable from "./weatherTable";

const chartData = [
  { month: "January", temperature: 186 },
  { month: "February", temperature: 305 },
  { month: "March", temperature: 237 },
  { month: "April", temperature: 73 },
  { month: "May", temperature: 209 },
  { month: "June", temperature: 214 },
];

const chartConfig = {
  temperature: {
    label: "Temperature",
    color: "hsl(var(--chart-1))",
  },
  
} satisfies ChartConfig;
const Weather = () => {
  return (
    <div className="mx-48 my-12  grid grid-cols-2 gap-6">
      <Card className="col-span-2 w-full p-8 gap-2">
        <CardHeader className="flex flex-row items-center justify-between gap-24">
          <div>
            <CardTitle className="mb-2">Weather Predictions</CardTitle>
            <CardDescription>
              High and low temperatures in specified time
            </CardDescription>
          </div>
          <DatePickerDemo />
        </CardHeader>
        <ChartContainer config={chartConfig} className="h-72 w-[100%]">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
            height={300}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tickFormatter={(value) => value.slice(0, 3)}
            />
              <YAxis />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="temperature"
              type="natural"
              fill="var(--color-temperature)"
              fillOpacity={0.9}
              stroke="var(--color-temperature)"
            />
          </AreaChart>
        </ChartContainer>
      </Card>
      <Card className="col-span-2 p-8">
      <CardHeader className="flex flex-row justify-between items-center gap-24">
         <CardTitle>Daily Records</CardTitle>
          <DatePickerDemo />
        </CardHeader>

      <WeatherTable />
      </Card>
    </div>
  );
};

export default Weather;
