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

export function DialogDeleteNote() {
  return (
    <Dialog>
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
              <Input placeholder="Insira sua senha" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancelar</Button>} />
            <Button>Salvar nota</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
