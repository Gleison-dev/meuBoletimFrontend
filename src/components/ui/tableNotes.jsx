import { MoreHorizontalIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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
import { useNavigate } from "react-router-dom";
import { DialogDemo } from "./dialogDemo";
import { DialogEditNote } from "./dialogEditNote";

export function TableNotes({ unit, note }) {
  return (
    <TableRow>
      <TableCell className="font-medium">{unit}ª unidade</TableCell>
      <TableCell>{note}</TableCell>
      <TableCell className="text-right">
        <DialogEditNote />
      </TableCell>
    </TableRow>
  );
}
