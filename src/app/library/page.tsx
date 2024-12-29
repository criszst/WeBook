'use client';

import { ContentLayout } from "@/components/SideBar/content-layout";
import React, { useState, useEffect } from "react";


import Image from 'next/image'

import Link from 'next/link';

import Book from "@/interfaces/IBook";
import { getBooks } from "@/services/GoogleBookService";

import '../styles/Book/Library/card.css';

const Library = () => {
    const [books, setBooks] = useState<Book[]>([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const booksData = await getBooks('Clean Code');

                setBooks(booksData.slice(0, 5));
                setLoading(false);
            } catch (error) {
                console.error("Erro ao carregar os livros:", error);
            }
        };

        fetchBooks();
    }, []);

    return (
        <ContentLayout title="Biblioteca">
            <div style={{ padding: "20px", flexGrow: "1", }}>
                <div>
                    <h1 style={{ fontSize: "2rem" }}>Meus Livros</h1>
                </div>


                {books.map((book) => (
                    <div key={book.id}>
                        <div className="mb-10">

                            <div className="grid font-mono bg-gray-9000">

                                <div className=" rounded-md bg-gray-800 shadow-lg">
                                    <div className="md:flex px-4 leading-none max-w-4xl">
                                        <div className="flex-none ">
                                            <Image
                                                style={{ maxHeight: "100%" }}
                                                src={`https://books.google.com/books/publisher/content/images/frontcover/${book.id}?fife=w400-h600&source=gbs_api`}
                                                alt={`Capa do livro: ${book.volumeInfo.title}`} 
                                                width={300} 
                                                height={520}
                                                loading="lazy"
                                                className="h-72 w-56 rounded-md 
                                                shadow-2xl transform -translate-y-4 border-3 
                                                border-black-400 shadow-lg"
                                            />
                                        </div>

                                        <div className="flex-col text-gray-300">

                                            <p className="pt-4 text-2xl font-bold">{book.volumeInfo.title}</p>
                                            <hr className="hr-text" data-content="" />
                                            <div className="text-md flex justify-between px-4 my-2">
                                                <span className="font-bold">{book.volumeInfo.authors} | {book.volumeInfo.categories}</span>
                                                <span className="font-bold"></span>
                                            </div>
                                            <p className="hidden md:block px-4 my-4 text-sm text-left">
                                                {book.searchInfo.textSnippet} 
                                            </p>

                                            <p className="flex text-md px-4 my-2">
                                                Rating: {book.volumeInfo.averageRating}
                                                <span className="font-bold px-2">|</span>
                                                Páginas: {book.volumeInfo.pageCount}
                                                <span className="font-bold px-2">|</span>
                                                Publicação: {book.volumeInfo.publishedDate}
                                            </p>

                                            <div className="text-xs">
                                                <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">TRAILER</button>

                                                <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">IMDB</button>

                                                <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">AMAZON</button>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center px-4 mb-4 w-full">
                                        <div className="flex">
                                            <i className="material-icons mr-2 text-red-600">favorite_border</i>
                                            <i className="material-icons text-blue-600">remove_red_eye</i>
                                        </div>
                                        <div className="flex">
                                            <i className="material-icons ml-2 text-yellow-600">sentiment_very_satisfied</i>
                                            <i className="material-icons ml-2 text-yellow-600">sentiment_neutral</i>
                                            <i className="material-icons ml-2 text-yellow-600">sentiment_very_dissatisfied</i>
                                            <i className="material-icons ml-2 text-yellow-600">star_outline</i>
                                            <i className="material-icons ml-2 text-yellow-600">star_half</i>
                                            <i className="material-icons ml-2 text-yellow-600">star</i>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        </div>
                    ))}

                    </div>
        </ContentLayout>
    )
}

export default Library