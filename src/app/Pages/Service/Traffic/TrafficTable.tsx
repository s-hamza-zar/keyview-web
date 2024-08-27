"use client";

import { DataTable } from "@/components/ui/data-table";
import { DatePickerWithRange } from "@/components/ui/RangeDatePicker";
import { Card } from "@/components/ui/Card";
import { columns, MultiTrafficResponse } from "./TrafficTabelColumn";

function getData(): any[] {
  return [
    {
      day: "2024-08-26",
      cars_in: 985,
      bikes_in: 6,
      people_in: 0,
      cars_out: 757,
      bikes_out: 2,
      people_out: 0,
    },
    {
      day: "2024-08-25",
      cars_in: 1052,
      bikes_in: 6,
      people_in: 0,
      cars_out: 672,
      bikes_out: 3,
      people_out: 0,
    },
    {
      day: "2024-08-24",
      cars_in: 1242,
      bikes_in: 3,
      people_in: 0,
      cars_out: 931,
      bikes_out: 4,
      people_out: 0,
    },
    {
      day: "2024-08-23",
      cars_in: 1137,
      bikes_in: 3,
      people_in: 0,
      cars_out: 898,
      bikes_out: 71,
      people_out: 1,
    },
    {
      day: "2024-08-22",
      cars_in: 1092,
      bikes_in: 10,
      people_in: 0,
      cars_out: 978,
      bikes_out: 4,
      people_out: 0,
    },
    {
      day: "2024-08-21",
      cars_in: 1139,
      bikes_in: 10,
      people_in: 0,
      cars_out: 982,
      bikes_out: 4,
      people_out: 0,
    },
    {
      day: "2024-08-20",
      cars_in: 1123,
      bikes_in: 9,
      people_in: 7,
      cars_out: 870,
      bikes_out: 3,
      people_out: 0,
    },
    {
      day: "2024-08-19",
      cars_in: 1057,
      bikes_in: 9,
      people_in: 0,
      cars_out: 771,
      bikes_out: 8,
      people_out: 0,
    },
    {
      day: "2024-08-18",
      cars_in: 1132,
      bikes_in: 12,
      people_in: 0,
      cars_out: 742,
      bikes_out: 8,
      people_out: 0,
    },
    {
      day: "2024-08-17",
      cars_in: 1226,
      bikes_in: 11,
      people_in: 0,
      cars_out: 941,
      bikes_out: 3,
      people_out: 0,
    },
    {
      day: "2024-08-16",
      cars_in: 1195,
      bikes_in: 7,
      people_in: 0,
      cars_out: 986,
      bikes_out: 4,
      people_out: 0,
    },
    {
      day: "2024-08-15",
      cars_in: 1224,
      bikes_in: 15,
      people_in: 0,
      cars_out: 964,
      bikes_out: 8,
      people_out: 0,
    },
    {
      day: "2024-08-14",
      cars_in: 1079,
      bikes_in: 15,
      people_in: 0,
      cars_out: 923,
      bikes_out: 8,
      people_out: 0,
    },
    {
      day: "2024-08-13",
      cars_in: 1162,
      bikes_in: 5,
      people_in: 0,
      cars_out: 892,
      bikes_out: 3,
      people_out: 0,
    },
    {
      day: "2024-08-12",
      cars_in: 1237,
      bikes_in: 5,
      people_in: 4,
      cars_out: 782,
      bikes_out: 3,
      people_out: 0,
    },
    {
      day: "2024-08-11",
      cars_in: 1082,
      bikes_in: 7,
      people_in: 0,
      cars_out: 876,
      bikes_out: 3,
      people_out: 0,
    },
    {
      day: "2024-08-10",
      cars_in: 1105,
      bikes_in: 10,
      people_in: 0,
      cars_out: 967,
      bikes_out: 3,
      people_out: 0,
    },
    {
      day: "2024-08-09",
      cars_in: 1084,
      bikes_in: 10,
      people_in: 0,
      cars_out: 917,
      bikes_out: 3,
      people_out: 0,
    },
    {
      day: "2024-08-08",
      cars_in: 1073,
      bikes_in: 5,
      people_in: 0,
      cars_out: 921,
      bikes_out: 3,
      people_out: 0,
    },
    {
      day: "2024-08-07",
      cars_in: 1116,
      bikes_in: 3,
      people_in: 0,
      cars_out: 896,
      bikes_out: 4,
      people_out: 0,
    },
    {
      day: "2024-08-06",
      cars_in: 1105,
      bikes_in: 5,
      people_in: 0,
      cars_out: 945,
      bikes_out: 4,
      people_out: 0,
    },
    {
      day: "2024-08-05",
      cars_in: 1075,
      bikes_in: 15,
      people_in: 0,
      cars_out: 824,
      bikes_out: 5,
      people_out: 0,
    },
    {
      day: "2024-08-04",
      cars_in: 1105,
      bikes_in: 15,
      people_in: 0,
      cars_out: 863,
      bikes_out: 5,
      people_out: 0,
    },
    {
      day: "2024-08-03",
      cars_in: 1128,
      bikes_in: 8,
      people_in: 0,
      cars_out: 917,
      bikes_out: 5,
      people_out: 0,
    },
    {
      day: "2024-08-02",
      cars_in: 1203,
      bikes_in: 6,
      people_in: 0,
      cars_out: 1014,
      bikes_out: 3,
      people_out: 0,
    },
    {
      day: "2024-08-01",
      cars_in: 1142,
      bikes_in: 3,
      people_in: 70,
      cars_out: 1002,
      bikes_out: 3,
      people_out: 0,
    },
    {
      day: "2024-07-31",
      cars_in: 969,
      bikes_in: 10,
      people_in: 0,
      cars_out: 864,
      bikes_out: 2,
      people_out: 1,
    },
    {
      day: "2024-07-30",
      cars_in: 1081,
      bikes_in: 15,
      people_in: 1,
      cars_out: 960,
      bikes_out: 9,
      people_out: 0,
    },
    {
      day: "2024-07-29",
      cars_in: 981,
      bikes_in: 13,
      people_in: 0,
      cars_out: 839,
      bikes_out: 8,
      people_out: 0,
    },
    {
      day: "2024-07-28",
      cars_in: 995,
      bikes_in: 2,
      people_in: 0,
      cars_out: 762,
      bikes_out: 2,
      people_out: 0,
    },
    {
      day: "2024-07-27",
      cars_in: 845,
      bikes_in: 1,
      people_in: 0,
      cars_out: 661,
      bikes_out: 2,
      people_out: 0,
    },
  ];
}

export default function TrafficTable() {
  console.log(getData(), "HAMZA");
  return (
    <DataTable
      columns={columns}
      data={getData().map((each: any) => {
        return {
          date: each.day,
          vehicels_in: +(each.cars_in + each.bikes_in),
          vehicels_out: +(each.cars_out + each.bikes_out),
        };
      })}
    />
  );
}
