import { AuthContext } from "@/context/AuthContext";
import { api } from "@/services/api";
import { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import icon_arrow from "../../assets/icon_arrow.svg";
import { TableNotes } from "@/components/ui/tableNotes";
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

export default function NotesOfStudent() {
  const { token } = useContext(AuthContext);
  const { studentId } = useParams();
  const [name, setName] = useState("");
  const [notes, setNotes] = useState([]);

  const handleStudent = async () => {
    try {
      const response = await api.get(`/studentById?id=${studentId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setName(response.data.student.usuario.name);
    } catch (error) {
      const message =
        error.response?.data?.message || "Erro ao listar o estudante.";
      return console.error(message);
    }
  };

  const handleNote = async () => {
    try {
      const response = await api.get(`/noteByStudent?studentId=${studentId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setNotes(response.data.note);
    } catch (error) {
      const message =
        error.response?.data?.message || "Erro ao listar a nota do estudante.";
      return console.error(message);
    }
  };

  useEffect(() => {
    handleStudent();
    handleNote();
  }, [token]);

  return (
    <>
      <section className="flex justify-center mt-10">
        <div className="w-96 p-8 rounded-xl bg-azul-claro">
          <div>
            <div className="flex items-center gap-1">
              <NavLink to="/dashboardTeacher">
                <img
                  className="p-1 rounded-full hover:bg-branco cursor-pointer"
                  src={icon_arrow}
                  alt="Ícone de seta"
                />
              </NavLink>
            </div>
          </div>
          <div className="flex flex-col justify-center p-2 mt-5 w-80 rounded-lg bg-branco">
            <div className="pl-2 mt-2 mb-2">
              <h1 className="text-xl">
                <strong>{name}</strong>
              </h1>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Unidade</TableHead>
                  <TableHead>Nota</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {notes.map((n) => (
                  <TableNotes key={n.id} unit={n.unit} note={n.note} />
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </>
  );
}
