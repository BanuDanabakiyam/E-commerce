"use client"

import { ColumnDef } from "@tanstack/react-table" // This is not shadcn/ui
import { CellAction} from "./cell-action"


export type BillboardColumn = {
  id: string
  label: string
  createdAt: string
}

export const columns: ColumnDef<BillboardColumn>[] = [
  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />
  }
  
]

// This is represent  columns in billboard page 
