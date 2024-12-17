import axios from 'axios';

const googleBooksApiUrl = 'https://www.googleapis.com/books/v1/volumes';

const apiKey = 'AIzaSyC0M094uHsFpQwr-sIS1bAw0Lg9Kwnidgo';

export async function getBooks(query: string) {
    const url = `${googleBooksApiUrl}?q=${query}&key=${apiKey}`;
    const response = await axios.get(url);

    //  filtrando apenas os livros que possuem preços 
    // (por algum motivo, tem vários livros duplicados que nao possuem preço e nem uma capa/thumbnail)
    return response.data.items
    .filter((item: { saleInfo: { listPrice: undefined; }; }) => item.saleInfo.listPrice !== undefined)
    .slice(0, 8);

}

export async function getBookById(id: any) {
    const url = `${googleBooksApiUrl}/${id}?key=${apiKey}`;
    const response = await axios.get(url);

    return response.data;
}

export async function getBookFromCategories(category: string) {
    const url = `${googleBooksApiUrl}?q=27%27+subject:${category}&key=${apiKey}`;
    const response = await axios.get(url);

    return response.data.items === undefined ? [] : response.data.items;
}