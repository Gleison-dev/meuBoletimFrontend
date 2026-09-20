import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import icon_pencil from "../../assets/icon_pencil.svg";
import { api } from "@/services/api";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";

export function DialogEditNote({ id, studentId, onNoteUpdate }) {
  const { token } = useContext(AuthContext);
  const [unit, setUnit] = useState("");
  const [note, setNote] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEditNote = async () => {
    try {
      setLoading(true);
      const response = await api.put(
        `/updateNote?id=${id}&studentId=${studentId}`,
        {
          newUnit: unit,
          newNote: note,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setLoading(false);
      onNoteUpdate?.();
      setOpen(false);
    } catch (error) {
      setLoading(false);
      const message = error.response?.data?.message || "Erro ao editar a nota.";
      return console.error(message);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger
          render={
            <Button
              className="cursor-pointer hover:bg-blue-200"
              variant="outline"
            >
              <img className="w-6 h-6" src={icon_pencil} alt="Ícone de lápis" />
            </Button>
          }
        />
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edição de Notas</DialogTitle>
            <DialogDescription>
              Precisa editar a nota do aluno? Faça isso abaixo.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Unidade</Label>
              <Input
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                placeholder="Insira a nova nota"
              />
            </Field>
            <Field>
              <Label htmlFor="username-1">Nota</Label>
              <Input
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Insira a nova nota"
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancelar</Button>} />
            {loading ? (
              <Button>Salvando...</Button>
            ) : (
              <Button onClick={handleEditNote}>Salvar nota</Button>
            )}
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
