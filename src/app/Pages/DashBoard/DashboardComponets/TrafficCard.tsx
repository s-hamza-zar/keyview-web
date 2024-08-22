import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/components/ui/Chart';
import React from 'react'
import { Label, Pie, PieChart } from 'recharts';
const chartData = [
    { browser: "cars", visitors: 275, fill: "var(--color-cars)" },
    { browser: "bikes", visitors: 200, fill: "var(--color-bikes)" },
    { browser: "peoples", visitors: 287, fill: "var(--color-peoples)" },
  ];
  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    cars: {
      label: "cars",
      color: "hsl(var(--chart-1))",
    },
    bikes: {
      label: "bikes",
      color: "hsl(var(--chart-2))",
    },
    peoples: {
      label: "peoples",
      color: "hsl(var(--chart-3))",
    },
  } satisfies ChartConfig;
const TrafficCard = () => {
    const totalVisitors = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
      }, []);
  return (
    <>
    
    <Card className="flex flex-col w-full transition-all hover:scale-105">
    <CardHeader className="items-center pb-0 px-0">
      <CardTitle>Traffic In</CardTitle>
    </CardHeader>
    <CardContent className="flex-1 pb-0 px-0">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px] px-0"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="visitors"
            nameKey="browser"
            innerRadius={60}
            strokeWidth={5}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-3xl font-bold"
                      >
                        {totalVisitors.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Visitors
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
          <ChartLegend
        content={<ChartLegendContent nameKey="browser" />}
        className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
      />
        </PieChart>
      </ChartContainer>
    </CardContent>
 
  </Card>
  <Card className="flex flex-col w-full mt-4 transition-all hover:scale-105">
    <CardHeader className="items-center pb-0 px-0">
      <CardTitle>Traffic Out</CardTitle>
    </CardHeader>
    <CardContent className="flex-1 pb-0 px-0">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px] px-0"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="visitors"
            nameKey="browser"
            innerRadius={60}
            strokeWidth={5}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-3xl font-bold"
                      >
                        {+totalVisitors.toLocaleString()+45}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Visitors
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
          <ChartLegend
        content={<ChartLegendContent nameKey="browser" />}
        className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
      />
        </PieChart>
      </ChartContainer>
    </CardContent>
 
  </Card>
    </>
  )
}

export default TrafficCard