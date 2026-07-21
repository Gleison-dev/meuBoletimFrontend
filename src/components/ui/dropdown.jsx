"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

export function DropdownMenuBasic() {
  const { user, logout } = useContext(AuthContext);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button className="w-25 h-15 text-lg" variant="outline">{user?.name} ▾</Button>} />
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
          <DropdownMenuItem>Perfil</DropdownMenuItem>
          <DropdownMenuItem>Configurações</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout} className="cursor-pointer text-red-600 focus:bg-red-300 focus:text-red-600">Sair</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
