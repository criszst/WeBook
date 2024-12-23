"use client"; 

import React, { useState, useEffect } from "react";
import Form from "../../components/Form"

import BookList from "../../components/BookList";
import Book from "../../interfaces/IBook";

import { getBooks } from "../../services/GoogleBookService";


import "../styles/style.css";
import "../styles/card.css";

import { ContentLayout } from "@/components/SideBar/content-layout";




const Search: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [books, setBooks] = useState<Book[]>([]); 
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {

    const fetchBooks = async () => {
      setLoading(true);

      try {
        const searchQuery = new URLSearchParams(window.location.search).get("q") || "Clean Code";
        setQuery(searchQuery);

        const booksData = await getBooks(searchQuery);

        setBooks(booksData.slice(0, 8));
        
      } catch (error) {
        console.error("Erro ao carregar os livros:", error);

      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <ContentLayout title="Busca">

    <section className="bg-mainColorBook">
      <Form query={query} />
      <div className="container py-2">
        <h1 className="h1 text-center" id="pageHeaderTitle">
          {query === "" ? "Insira um livro para pesquisar" : query}
        </h1>

        {loading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <BookList book={books[0]} skeleton={true} key={`skeleton-${index}`} />
          ))
        ) : (
          books.map((book) => (
            <BookList book={book} skeleton={false} key={book.id} />
          ))
        )}
      
      </div>
    </section>
    </ContentLayout>
  );
};

export default Search;
