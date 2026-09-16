import { TableCell, TableRow } from "@/components/ui/table";
import { DialogEditNote } from "./dialogEditNote";

export function TableNotes({ unit, note, id, studentId }) {
  return (
    <TableRow>
      <TableCell className="font-medium">{unit}ª unidade</TableCell>
      <TableCell>{note}</TableCell>
      <TableCell className="text-right">
        <DialogEditNote studentId={studentId} id={id} />
      </TableCell>
    </TableRow>
  );
}
