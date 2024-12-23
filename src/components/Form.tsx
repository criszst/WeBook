"use client";

import React, { useState } from 'react';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
 

const Form: React.FC<{ query: string }> = ({ query }) => {
  const [searchQuery, setSearchQuery] = useState(query);
  const [position, setPosition] = React.useState("bottom")

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value); 
  };

  return (
    
    <form className="form d-flex" action="/search" method="get">
      <label htmlFor="search">
        <Input required
          autoComplete="on"
          placeholder="BUSQUE LIVROS"
          id="search"
          name="q"
          type="text"
          value={searchQuery}
          onChange={handleInputChange} />
        <Button type="submit" variant="default">Pesquisar</Button>

      
        <DropdownMenu >
          
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-4">Filtrar livros</Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-56">

            <DropdownMenuLabel>Filtrar por:</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>

              <DropdownMenuRadioItem value="maisCaro">Mais Caro</DropdownMenuRadioItem>

              <DropdownMenuRadioItem value="menosCaro">Menos Caro</DropdownMenuRadioItem>

              <DropdownMenuRadioItem value="a-z">A-Z</DropdownMenuRadioItem>

              <DropdownMenuRadioItem value="z-a">Z-A</DropdownMenuRadioItem>

            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

      </label>
    </form>
    
  );
};

export default Form;
