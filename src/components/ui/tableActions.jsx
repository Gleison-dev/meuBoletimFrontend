import { TableCell, TableRow } from "@/components/ui/table";

export function TableActions({ discipline, unit, note }) {
  return (
    <TableRow>
      <TableCell className="font-medium">{discipline}</TableCell>
      <TableCell className="text-center">{unit}ª</TableCell>
      <TableCell className="text-center">{note}</TableCell>
    </TableRow>
  );
}
