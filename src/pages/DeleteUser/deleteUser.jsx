import Input from "@/components/Input/input";
import Label from "@/components/Label/label";
import { AuthContext } from "@/context/AuthContext";
import { api } from "@/services/api";
import { useContext, useEffect, useState } from "react";
import Select from "react-select";

export default function DeleteUser({ fetchUsers, users }) {
  const { token } = useContext(AuthContext);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const usersOption = users.map((i) => ({
    value: i.id,
    label: i.name,
  }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.delete(`/deleteUser?delUserId=${userId}`, {
        data: {
          password,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      const message =
        error.response?.data?.message || "Erro ao deletar o usuário.";
      return console.error(message);
    }
  };

  return (
    <>
      <section className="p-4 rounded-lg bg-branco">
        <div>
          <h1 className="text-xl">
            <strong>Deletar usuário</strong>
          </h1>
          <p>Delete um usuário abaixo!</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-3">
          <div>
            <Label name="Informe o usuário" />
            <Select
              options={usersOption}
              onChange={(selected) => setUserId(selected.value)}
              placeholder="Selecione um usuário"
            />
          </div>
          <div>
            <Label name="Digite sua senha" />
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Insira a sua senha aqui."
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-80 h-12 rounded-md cursor-pointer text-xl text-branco bg-red-500 hover:bg-red-800"
            >
              Excluir
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
