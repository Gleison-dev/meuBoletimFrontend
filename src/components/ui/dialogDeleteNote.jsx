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
import icon_trash from "../../assets/icon_trash.svg";
import { api } from "@/services/api";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";

export function DialogDeleteNote({ id, studentId, onDeleteUpdate }) {
  const { token } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleDeleteNote = async () => {
    try {
      setLoading(true);
      const response = await api.delete(
        `/deleteNote?id=${id}&studentId=${studentId}`,
        {
          data: { password },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setLoading(false);
      setOpen(false);
      onDeleteUpdate?.();
    } catch (error) {
      setLoading(false);
      const message =
        error.response?.data?.message || "Erro ao deletar a nota.";
      setMessage(message);
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger
          render={
            <Button
              className="cursor-pointer hover:bg-red-300"
              variant="outline"
            >
              <img
                className="w-6 h-6"
                src={icon_trash}
                alt="Ícone de lixeira"
              />
            </Button>
          }
        />
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Excluir Nota</DialogTitle>
            <DialogDescription>
              Deseja remover a nota do estudante? Faça isso abaixo!
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label>Senha</Label>
              <Input
                type={"password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Insira sua senha"
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <p className="text-red-400">
              <strong>{message}</strong>
            </p>
            <DialogClose render={<Button variant="outline">Cancelar</Button>} />
            {loading ? (
              <Button className="bg-red-500 hover:bg-red-700">
                Excluindo...
              </Button>
            ) : (
              <Button
                onClick={handleDeleteNote}
                className="bg-red-500 hover:bg-red-700"
              >
                Excluir nota
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
