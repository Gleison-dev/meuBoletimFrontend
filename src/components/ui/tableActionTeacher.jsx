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

export function TableActionsTeacher({ id, turma, discipline }) {
  const navigate = useNavigate();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Turma</TableHead>
          <TableHead>Disciplina</TableHead>
          <TableHead className="text-right">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">{turma}</TableCell>
          <TableCell>{discipline}</TableCell>
          <TableCell className="text-right">
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button variant="ghost" size="icon" className="size-8">
                    <MoreHorizontalIcon />
                    <span className="sr-only">Open menu</span>
                  </Button>
                }
              />
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => navigate(`/dashboardClass/${id}`)}
                >
                  Acessar
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
