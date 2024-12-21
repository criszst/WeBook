import React, { useState } from 'react';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Form: React.FC<{ query: string }> = ({ query }) => {
  const [searchQuery, setSearchQuery] = useState(query);

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
        <Button type="submit">Filtrar</Button>

        
      </label>
    </form>
    
  );
};

export default Form;
