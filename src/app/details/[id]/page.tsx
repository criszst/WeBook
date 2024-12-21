'use client';

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"

import Image from "next/image";
import Link from "next/link";


import Book from '../../../interfaces/IBook';
import { getBookById } from '../../../services/GoogleBookService';


import "../../styles/globals.css";
import "../../styles/style.css";

import "../../styles/dropdown.css";
import "../../styles/inputList.css";

import '../../styles/Book/Detail/BackgroundCover.css';
import '../../styles/Book/Detail/BookInfo.css';



const BookDetails: React.FC = () => {
    const [book, setBook] = useState<Book | null>(null); 
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        const fetchBookID = async () => {
            const book = await getBookById(id);

            setBook(book)

        }

        if (id) {
            fetchBookID();
        }
    }, [id]);

    if (!book) {
        return <p>Carregando...</p>;
    }

    return (

            <section className="container-hero sectionDetail">
              <div className="backgroundCover">
                <img src={book.volumeInfo.imageLinks.thumbnail} alt="Capa do livro" />
                <div className="transparencyEffect"></div>
              </div>
        
              <div className="headerInfo container row">

                <div className="bookCoverImage col-md-4">
                  <div className="fixedImg">
                    <figure className="cover">
                      
                      <Image
                        src={`https://books.google.com/books/publisher/content/images/frontcover/${book.id}?fife=w400-h600&source=gbs_api`}
                        alt="Capa do livro"
                        width={400}
                        height={500}
                        priority={true}
                      />
                    </figure>
                  </div>
                </div>
        
                <div className="bookInfo col-md-8">
                  <div className="mainInfo">
                    <div>
                      <figure>
                        <blockquote className="blockquote">
                          <h1 className="title" style={{ marginLeft: '6px' }}>
                            {book.volumeInfo.title}
                          </h1>
                        </blockquote>
                        <figcaption className="blockquote-footer subtitle" style={{ marginLeft: '10px' }}>
                          {book.volumeInfo.authors.join(', ')}
                        </figcaption>
                      </figure>
                    </div>
        
                    <div>
                      {[...Array(book.volumeInfo.averageRating)].map((_, i) => (
                        <i key={i} className="fas fa-star ratingColor"></i>
                      ))}
                      <span className="rating">{book.volumeInfo.averageRating}</span>
                    </div>
        
                    <div className="row infosBook">
                      <div className="col-lg-3 position-relative">
                        <h6 className="mb-3">Preço</h6>

                        <h6 className="fw-bold mb-0" style={{ marginLeft: '-8px !important' }}>
                          <span>
                            <i className="fas fa-money-check-dollar mb-2"></i>
                            R$ {(book.saleInfo.retailPrice?.amount as number) ?? 'Sem Preço'}
                          </span>
                        </h6>

                        <div className="vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0"></div>
                      </div>
        
                      <div className="col-lg-3 position-relative">
                        <h6 className="mb-3">Páginas</h6>
                        <h6 className="fw-bold mb-0" style={{ marginLeft: '-8px !important' }}>
                          <span>
                            <i className="fas fa-book-open mb-2"></i>
                            {book.volumeInfo.pageCount}
                          </span>
                        </h6>
                        <div className="vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0"></div>
                      </div>
        
                      <div className="col-lg-3 position-relative">
                        <h6 className="mb-3">Idioma</h6>
                        <h6 className="fw-bold mb-0" style={{ marginLeft: '-8px !important' }}>
                          <span>
                            <i className="fas fa-language mb-2"></i>
                            {book.volumeInfo.language}
                          </span>
                        </h6>
                      </div>
                    </div>
        
                    <div>
                      <h6 className="fw-normal mb-3" style={{ marginLeft: '10px' }}>
                        Categorias
                      </h6>
                      {
                      book.volumeInfo.categories[0].split('/').map((category, index) => {
                        const categoryClean = category.trim().toLowerCase();
                        return (
                          <Link key={index} href={`/categories/${categoryClean}`}>
                            <span className="badge chip">{category}</span>
                          </Link>
                        );
                      })}
                    </div>
        
                    <div className="readExampleDiv">
                      <div className="row" style={{ gap: '30px' }}>
                        <button
                          type="button"
                          className="btn btnReadExample col-lg-4"
                          onClick={() => window.open(book.accessInfo.webReaderLink, '_blank')}
                        >
                          <span>Ler Amostra</span>
                        </button>
        
                        <button type="button" className="btn btnReadExample col-lg-4">
                          <span>Salvar na Biblioteca</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
     
    );
};

export default BookDetails;
        