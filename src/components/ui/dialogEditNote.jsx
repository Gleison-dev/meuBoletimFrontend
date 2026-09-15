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

export function DialogEditNote({}) {
  return (
    <Dialog>
      <form>
        <DialogTrigger
          render={
            <Button className="cursor-pointer hover:bg-blue-200" variant="outline">
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
              <Input />
            </Field>
            <Field>
              <Label htmlFor="username-1">Nota</Label>
              <Input />
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
