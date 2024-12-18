interface Book {
  accessInfo: {

    [key: string]: string | URL | undefined; 
  };
  saleInfo: {
    retailPrice?: {
      amount: number;
    };
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
