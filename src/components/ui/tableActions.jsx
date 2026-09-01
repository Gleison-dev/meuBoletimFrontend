import { MoreHorizontalIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function TableActions({ discipline, unit, note }) {
  return (
    <TableRow>
      <TableCell className="font-medium">{discipline}</TableCell>
      <TableCell className="text-center">{unit}ª</TableCell>
      <TableCell className="text-center">{note}</TableCell>
    </TableRow>
  );
}
