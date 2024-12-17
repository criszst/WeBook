import { ParsedUrlQuery } from "querystring";
import { NextParsedUrlQuery } from "next/dist/server/request-meta";
import { NextRouter } from "next/router";

interface Book {
  accessInfo: {

    [key: string]: string | URL | undefined; 
  };
  saleInfo: {
    [key: string]: string | number;
    amount: string | number;
  };
  retailPrice: {
    [key: string]: string | number;
    amount: string | number;
  };
  id: string;
  volumeInfo: {
    imageLinks: {

      thumbnail?: string;
      smallThumbnail?: string;
    };
    averageRating: number | null;
    authors: string[];
    title: string;
    publishedDate: string;
    description: string;
    categories: string[] ;
    pageCount: number; 
    language: string;
  };
  searchInfo: {
    textSnippet: string;
  };
}

export default Book;
