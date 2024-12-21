"use client"; 

import React, { useState, useEffect } from "react";
import Form from "../../components/Form"
import BookList from "../../components/BookList";

import Book from "../../interfaces/IBook";

import { getBooks } from "../../services/GoogleBookService";


import "../styles/globals.css";
import "../styles/style.css";

import "../styles/card.css";

import '../styles/Book/Detail/BackgroundCover.css';
import '../styles/Book/Detail/BookInfo.css';


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
    <section className="bg-mainColorBook">
      <Form query={query} />
      <div className="container py-4">
        <h1 className="h1 text-center" id="pageHeaderTitle">
          {query === "" ? "Insira um livro para pesquisar" : query}
        </h1>

        {loading ? (
          <p>Carregando... </p>
        ) : (
          books.map((book) => (
            <BookList book={book} key={book.id} />
          ))
        )}
      </div>
    </section>
  );
};

export default Search;
