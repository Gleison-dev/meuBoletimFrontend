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

export function DialogDemo({ studentId, value, onChange }) {
  return (
    <Dialog>
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
                value={value}
                onChange={onChange}
                placeholder="Insira a unidade"
              />
            </Field>
            <Field>
              <Label htmlFor="username-1">Nota</Label>
              <Input placeholder="Insira a nota" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancelar</Button>} />
            <Button type="submit">Salvar nota</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
