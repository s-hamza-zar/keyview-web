"use client"

import { ColumnDef } from "@tanstack/react-table"

export type MultiTrafficResponse = {
    date: string,
    vehicels_in:number,
    vehicels_out: number
}

export const columns: ColumnDef<MultiTrafficResponse>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "vehicels_in",
    header: "Vehicels In",
  },
  {
    accessorKey: "vehicels_out",
    header: "Vehicels Out",
  },
]
