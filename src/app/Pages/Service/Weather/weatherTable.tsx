"use client";

import { DataTable } from "@/components/ui/data-table";
import { columns, MultiTempResponse } from "./weatherTableColumn";
import { DatePickerWithRange } from "@/components/ui/RangeDatePicker";
import { Card } from "@/components/ui/Card";

function getData(): MultiTempResponse[] {
  return [
    {
      day: "2024-08-26",
      max_temperature: "68.95",
      min_temperature: "66.88",
    },
    {
      day: "2024-08-25",
      max_temperature: "88.16",
      min_temperature: "58.23",
    },
    {
      day: "2024-08-24",
      max_temperature: "85.64",
      min_temperature: "56.97",
    },
    {
      day: "2024-08-23",
      max_temperature: "83.68",
      min_temperature: "55.4",
    },
    {
      day: "2024-08-22",
      max_temperature: "80.49",
      min_temperature: "52.93",
    },
    {
      day: "2024-08-21",
      max_temperature: "75.56",
      min_temperature: "52.5",
    },
    {
      day: "2024-08-20",
      max_temperature: "75.7",
      min_temperature: "60.91",
    },
    {
      day: "2024-08-19",
      max_temperature: "r",
      min_temperature: "66.29",
    },
    {
      day: "2024-08-18",
      max_temperature: "91.04",
      min_temperature: "72.27",
    },
    {
      day: "2024-08-17",
      max_temperature: "89.74",
      min_temperature: "72.93",
    },
    {
      day: "2024-08-16",
      max_temperature: "89.51",
      min_temperature: "63.48",
    },
    {
      day: "2024-08-15",
      max_temperature: "87.82",
      min_temperature: "61.32",
    },
    {
      day: "2024-08-14",
      max_temperature: "85.62",
      min_temperature: "64.62",
    },
    {
      day: "2024-08-13",
      max_temperature: "83.17",
      min_temperature: "65.5",
    },
    {
      day: "2024-08-12",
      max_temperature: "84.58",
      min_temperature: "67.5",
    },
    {
      day: "2024-08-11",
      max_temperature: "86.59",
      min_temperature: "69.15",
    },
    {
      day: "2024-08-10",
      max_temperature: "90.14",
      min_temperature: "74.39",
    },
    {
      day: "2024-08-09",
      max_temperature: "85.57",
      min_temperature: "75.54",
    },
    {
      day: "2024-08-08",
      max_temperature: "78.4",
      min_temperature: "74.12",
    },
    {
      day: "2024-08-07",
      max_temperature: "85.1",
      min_temperature: "74.23",
    },
    {
      day: "2024-08-06",
      max_temperature: "87.78",
      min_temperature: "73.62",
    },
    {
      day: "2024-08-05",
      max_temperature: "92.89",
      min_temperature: "72.41",
    },
    {
      day: "2024-08-04",
      max_temperature: "86.92",
      min_temperature: "71.74",
    },
    {
      day: "2024-08-03",
      max_temperature: "91.26",
      min_temperature: "72.66",
    },
    {
      day: "2024-08-02",
      max_temperature: "97.14",
      min_temperature: "72.97",
    },
    {
      day: "2024-08-01",
      max_temperature: "96.78",
      min_temperature: "72.5",
    },
    {
      day: "2024-07-31",
      max_temperature: "r",
      min_temperature: "71.8",
    },
    {
      day: "2024-07-30",
      max_temperature: "r",
      min_temperature: "71.91",
    },
    {
      day: "2024-07-29",
      max_temperature: "88.34",
      min_temperature: "69.31",
    },
    {
      day: "2024-07-28",
      max_temperature: "89.4",
      min_temperature: "63.18",
    },
    {
      day: "2024-07-27",
      max_temperature: "86.18",
      min_temperature: "65.05",
    },
  ];
}

export default function WeatherTable() {
  return (
      <DataTable columns={columns} data={getData()} />
  );
}
