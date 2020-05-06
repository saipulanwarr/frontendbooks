const initialState = {
    books: [],
    book: null,
    isLoading: false
}

const books = (state = initialState, action) => {
    switch(action.type){
        case 'GET_BOOKS_PENDING':
            return{
                ...state,
                isLoading: true
            }

        case 'GET_BOOKS_REJECTED':
            return{
                ...state,
                isLoading: true
            }

        case 'GET_BOOKS_FULFILLED':
            return{
                ...state,
                isLoading: false,
                books: action.payload.data.result
            }

        case 'CREATE_BOOK_PENDING':
            return{
                ...state,
                isLoading: true,

            }
        case 'CREATE_BOOK_REJECTED':
            return{
                ...state,
                isLoading: true
            }
        case 'CREATE_BOOK_FULFILLED':
            const newBooks = [...state.books, action.payload.data];
            return{
                ...state,
                isLoading: false,
                books: newBooks
            }

        case 'GET_BOOK_PENDING':
            return{
                ...state,
                isLoading: true
            }
    
        case 'GET_BOOK_REJECTED':
            return{
                ...state,
                isLoading: true
            }
    
        case 'GET_BOOK_FULFILLED':
            return{
                ...state,
                isLoading: false,
                book: action.payload.data
            }

        case 'UPDATE_BOOK_PENDING':
            return{
                ...state,
                isLoading: true
            }
        
        case 'UPDATE_BOOK_REJECTED':
            return{
                ...state,
                isLoading: true
            }
    
        case 'UPDATE_BOOK_FULFILLED':
            const newBookAfterUpdate = state.books.map(book => {
                if(book.id === action.payload.data.id){
                    return action.payload.data;
                }

                return book;
            })
            return{
                ...state,
                isLoading: false,
                books: newBookAfterUpdate
            }

        case 'DELETE_BOOK_PENDING':
            return{
                ...state,
                isLoading: true
            }
        
        case 'DELETE_BOOK_REJECTED':
            return{
                ...state,
                isLoading: true
            }
    
        case 'DELETE_BOOK_FULFILLED':
            const newBookAfterDelete = state.books.filter(book => book.id !== action.payload.data.id);
            return{
                ...state,
                isLoading: false,
                books: newBookAfterDelete
            }
        default:
            return state;
    }
}

export default books;
