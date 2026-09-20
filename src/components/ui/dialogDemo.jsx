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
import { AuthContext } from "@/context/AuthContext";
import { api } from "@/services/api";
import { useContext, useState } from "react";

export function DialogDemo({ studentId, disciplineId }) {
  const { token } = useContext(AuthContext);
  const [unit, setUnit] = useState("");
  const [note, setNote] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNote = async () => {
    try {
      setLoading(true);
      const response = await api.post(
        `/createNote?studentId=${studentId}&disciplineId=${disciplineId}`,
        {
          unit,
          note,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setLoading(false);
      setOpen(false);
    } catch (error) {
      const message = error.response?.data?.message || "Erro ao lançar a nota.";
      return console.error(message);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger
          render={<Button variant="outline">Lançar nota</Button>}
        />
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Lançamento de notas</DialogTitle>
            <DialogDescription>
              Faça o lançamento das notas do estudante pelo formulário abaixo!
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Unidade</Label>
              <Input
                type="number"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                placeholder="Insira a unidade"
              />
            </Field>
            <Field>
              <Label htmlFor="username-1">Nota</Label>
              <Input
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Insira a nota"
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancelar</Button>} />
            {loading ? (
              <Button onClick={handleNote}>Salvando...</Button>
            ) : (
              <Button onClick={handleNote}>Salvar nota</Button>
            )}
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
