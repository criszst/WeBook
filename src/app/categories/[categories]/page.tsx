"use client"; 

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"

import { getBookFromCategories } from "../../../services/GoogleBookService";
import BookList from "../../../components/BookList";
import Book from "../../../interfaces/IBook";

import "../../styles/style.css";
import "../../styles/card.css";
import '../../styles/Book/Detail/BackgroundCover.css';
import '../../styles/Book/Detail/BookInfo.css';

const BookCategory: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]); 
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const category = params.categories;

  useEffect(() => {
    const fetchBookCategory = async () => {

        const booksCategory = await getBookFromCategories(category as string);
        setBooks(booksCategory.slice(0, 8));
        setLoading(false); 
        
      }

    fetchBookCategory();

  }, [category]);
  return (
    <section>
      <div className="container py-4">
        <h1 className="h1 text-center" id="pageHeaderTitle">
          {loading ? "Carregando..." : (books.length === 0 ? "Categoria não encontrada!" : category)}
        </h1>
        {!loading && books.length === 0 && (
          <p>Nenhum livro encontrado nesta categoria.</p>
        )}

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
  );
};

export default BookCategory;
