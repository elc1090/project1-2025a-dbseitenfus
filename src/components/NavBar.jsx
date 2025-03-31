"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Menu, User, CircleUserRound } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import logo from "@/resources/logo.svg";

export default function Navbar() {
  return (
    <header className="w-full bg-blue shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Menu lateral (caso necessário) */}
        <Button variant="ghost" size="lg">
        <Menu className="menu-icon text-white" />
        </Button>

        <Image 
            src={logo} 
            alt="Logo" 
            className="w-158xs h-64xs"
          />

        {/* Input de pesquisa */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
          <Input
            type="text"
            placeholder="Aperte o k e busque aqui"
            className="pl-10 bg-input-bg-navbar"
          />
        </div>

        <div className="container w-30 h-15 flex justify-left items-center text-text-navbar">
            <CircleUserRound className="w-10 h-10" /> 
            <span className="text-xs"><strong>ENTRE</strong> ou <strong>CADASTRE-SE</strong></span>  
        </div>

        {/* Botões */}
        <div className="flex gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}