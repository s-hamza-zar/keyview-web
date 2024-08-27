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
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import TrafficTable from "./TrafficTable";
import moment from 'moment';
const chartData = [
  {
    cars_in: 4,
    cars_out: 2,
    bikes_in: 0,
    bikes_out: 0,
    people_in: 0,
    people_out: 0,
    timestamp: "2024-08-26T00:00:00.000000-0400",
    property: 1001,
  },
  {
    cars_in: 4,
    cars_out: 1,
    bikes_in: 0,
    bikes_out: 0,
    people_in: 0,
    people_out: 0,
    timestamp: "2024-08-26T01:00:00.000000-0400",
    property: 1001,
  },
  {
    cars_in: 1,
    cars_out: 0,
    bikes_in: 0,
    bikes_out: 0,
    people_in: 0,
    people_out: 0,
    timestamp: "2024-08-26T02:00:00.000000-0400",
    property: 1001,
  },
  {
    cars_in: 0,
    cars_out: 0,
    bikes_in: 0,
    bikes_out: 0,
    people_in: 0,
    people_out: 0,
    timestamp: "2024-08-26T03:00:00.000000-0400",
    property: 1001,
  },
  {
    cars_in: 0,
    cars_out: 1,
    bikes_in: 0,
    bikes_out: 0,
    people_in: 0,
    people_out: 0,
    timestamp: "2024-08-26T04:00:00.000000-0400",
    property: 1001,
  },
];
const data=chartData.map((each)=>{
    return{
        date:moment(each.timestamp).format("ddd, hA"),
        vehicels_in: +(each.cars_in + each.bikes_in),
        vehicels_out: +(each.cars_out + each.bikes_out),
    }
})
const chartConfig = {
  vehicels_in: {
    label: "Vehicels In",
  },
  vehicels_out:{
    label:"Vehicels Out"
  }
} satisfies ChartConfig;
const Traffic = () => {
  return (
    <div className="mx-48 my-12  grid grid-cols-2 gap-6">
      <Card className="col-span-2 w-full p-8 gap-2">
        <CardHeader className="flex flex-row items-center justify-between gap-24">
          <div>
            <CardTitle className="mb-2">Traffic Predictions</CardTitle>
            <CardDescription>
            Traffic flow throughout the property
            </CardDescription>
          </div>
          <DatePickerDemo />
        </CardHeader>
        <ChartContainer config={chartConfig} className="h-72 w-[100%]">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 50,
            }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              interval={0}
              height={1}
              // type="number"
              // domain={[data[0].date, data[data.length - 1].date]}
              // tickFormatter={(date) => date.toLocaleDateString('en-UB')}
            />
            <YAxis />
            <Tooltip />
            <Bar dataKey="vehicels_in" fill="#8884d8" />
            <Bar dataKey="vehicels_out" fill="#82ca9d" />
            <Legend verticalAlign="bottom" margin={{bottom:-22}} />
          </BarChart>
        </ChartContainer>
      </Card>
      <Card className="col-span-2 p-8">
        <CardHeader className="flex flex-row justify-between items-center gap-24">
          <CardTitle>Daily Records</CardTitle>
          <DatePickerDemo />
        </CardHeader>
        <TrafficTable />
      </Card>
    </div>
  );
};

export default Traffic;
