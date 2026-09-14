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

export function TableNotes({ unit, note }) {
  return (
    <TableRow>
      <TableCell className="text-center font-medium">{unit}ª unidade</TableCell>
      <TableCell className="text-center font-medium">{note}</TableCell>
    </TableRow>
  );
}
