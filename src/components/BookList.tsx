import React from "react";
import Book from "../interfaces/IBook";

import Image from 'next/image'

import Link from 'next/link';


const BookList: React.FC<{ book: Book; }> = ({ book }) => {
    return ( 
        <article className="postcard dark blue">
                  <a className="postcard__img_link" href={`/details/${book.id}`}>
                  <Image
          className="postcard__img"
          style={{ maxHeight: "100%" }}
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
                      {book.volumeInfo.description || book.searchInfo.textSnippet}
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