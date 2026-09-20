import { TableCell, TableRow } from "@/components/ui/table";
import { DialogEditNote } from "./dialogEditNote";
import { DialogDeleteNote } from "./dialogDeleteNote";

export function TableNotes({
  unit,
  note,
  id,
  studentId,
  onNoteUpdate,
  onDeleteUpdate,
}) {
  return (
    <TableRow>
      <TableCell className="font-medium">{unit}ª unidade</TableCell>
      <TableCell className="text-center">{note}</TableCell>
      <TableCell className="text-right">
        <DialogEditNote
          studentId={studentId}
          id={id}
          onNoteUpdate={onNoteUpdate}
        />
      </TableCell>
      <TableCell className="text-right">
        <DialogDeleteNote
          id={id}
          studentId={studentId}
          onDeleteUpdate={onDeleteUpdate}
        />
      </TableCell>
    </TableRow>
  );
}
