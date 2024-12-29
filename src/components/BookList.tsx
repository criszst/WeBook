import React from "react";
import Book from "../interfaces/IBook";

import Image from 'next/image'

import Link from 'next/link';
import { Skeleton } from "./ui/skeleton";


const BookList: React.FC<{ book: Book, skeleton: Boolean }> = ({ book, skeleton }) => {
  if (skeleton) {
    return (
      <article className="postcard dark blue">
        <Skeleton className="postcard__img" style={{ height: "500px" }} />
        <div className="postcard__text">
          <Skeleton className="postcard__title blue" style={{ height: "2rem", width: "80%" }} />
          <Skeleton className="postcard__subtitle small" style={{ height: "1rem", width: "40%" }} />
          <div className="postcard__bar"></div>
          <Skeleton className="postcard__preview-txt" style={{ height: "4rem", width: "100%" }} />
          <ul className="postcard__tagbox">
            <Skeleton className="tag__item" style={{ height: "2rem", width: "30%" }} />
            <Skeleton className="tag__item" style={{ height: "2rem", width: "30%" }} />
            <Skeleton className="tag__item" style={{ height: "2rem", width: "30%" }} />
          </ul>
        </div>
      </article>
    )
  }

  if (!book) return null;

    return (
      
        <article className="postcard dark blue" style={{ padding: "20px",  }}>
                  <a className="postcard__img_link" href={`/details/${book.id}`}>
                  <Image
          className="postcard__img"
          style={{ maxHeight: "60%" }}
          src={`https://books.google.com/books/publisher/content/images/frontcover/${book.id}?fife=w400-h600&source=gbs_api`}
          alt={`Capa do livro: ${book.volumeInfo.title}`} 
          width={300} 
          height={520}
          loading="lazy"
        />
        
                  </a>

                  <div className="postcard__text">

                    <h1 className="postcard__title blue">
                      <Link href={`/details/${book.id}`}>{book.volumeInfo.title}</Link>
                    </h1>

                    <div className="postcard__subtitle small">
                      <time dateTime="2024-12-09 14:09:00">
                        <i className="fas fa-calendar-alt mr-2"></i>
                        {new Date(book.volumeInfo.publishedDate).toLocaleDateString("pt-BR")}
                      </time>
                    </div>

                    <div className="postcard__bar"></div>

                    <div className="postcard__preview-txt" style={{ fontSize: "14px" }}>
                      {book.searchInfo.textSnippet || book.volumeInfo.description}
                    </div>

                    <ul className="postcard__tagbox">
                      <Link href={`/categories/${book.volumeInfo.categories[0].trim().toLowerCase()}`}>

                        <li className="tag__item play blue">
                          <i className="fas fa-tags"></i>
                          {book.volumeInfo.categories[0]}
                        </li>

                      </Link>

                      <li className="tag__item">
                        <i className="fas fa-file"></i>
                        {book.volumeInfo.pageCount} páginas
                      </li>

                      <Link href={`/details/${book.id}`}>
                        <li className="tag__item play blue">
                          <i className="fas fa-circle-info"></i>
                          Ver Detalhes
                        </li>
                      </Link>

                    </ul>

                  </div>
                </article>
    )
};

export default BookList;