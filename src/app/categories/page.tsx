'use client';

import { ContentLayout } from '@/components/SideBar/content-layout';
import Book from '@/interfaces/IBook';
import { getBooks } from '@/services/GoogleBookService';
import { useEffect, useState } from 'react';

import "../styles/style.css";
import "../styles/card.css";

const GetCategories = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [categories, setCategories] = useState<string>('');


    return (
        <ContentLayout title="Categorias">
        <div> 
            <h1>teste</h1>
        </div>
        </ContentLayout>
    );
};
export default GetCategories;

