import axios from 'axios';

export const getBooks = (data) => {
    return{
        type: 'GET_BOOKS',
        payload: axios({
            method: "get",
            url: "http://localhost:8000/book",
            headers: data
        })
    }
}

export const createBook = (data) => {
    return{
        type: 'CREATE_BOOK',
        payload: axios({
            method: "POST",
            url: "http://localhost:8000/book",
            data: data
        })
    }
}

export const getBook = (bookId) => {
    return{
        type: 'GET_BOOK',
        payload: axios({
            method: "get",
            url: `http://localhost:8000/book/${bookId}`
        })
    }
}

export const updateBook = (bookId, data) => {
    return{
        type: "UPDATE_BOOK",
        payload: axios({
            method: "put",
            url: `http://localhost:8000/book/${bookId}`,
            data: data
        })
    }
}

export const deleteBook = (bookId) => {
    return{
        type: "DELETE_BOOK",
        payload: axios({
            method: "DELETE",
            url: `http://localhost:8000/book/${bookId}`
        })
    }
}