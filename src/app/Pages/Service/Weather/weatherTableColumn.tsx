"use client"

import { ColumnDef } from "@tanstack/react-table"

export type MultiTempResponse = {
  day: string,
  max_temperature:string,
  min_temperature: string
}

export const columns: ColumnDef<MultiTempResponse>[] = [
  {
    accessorKey: "day",
    header: "Date",
  },
  {
    accessorKey: "min_temperature",
    header: "Temperature Min",
  },
  {
    accessorKey: "max_temperature",
    header: "Temperature Max",
  },
]
