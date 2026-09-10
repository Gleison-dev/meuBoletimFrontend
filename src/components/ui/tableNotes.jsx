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
  const navigate = useNavigate();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">
            <strong>Unidade</strong>
          </TableHead>
          <TableHead className="text-center">
            <strong>Nota</strong>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="text-center font-medium">{unit}</TableCell>
          <TableCell className="text-center font-medium">{note}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
