import React, { Component } from 'react';
import BookItem from './BookItem';
import DetailBook from './DetailBook';

class Books extends Component{
    constructor(props){
        super(props);

        this.state = {
            books: [
                {
                    name: 'Book 1',
                    price: 20000,
                    writer: "writer 1",
                    publisher: 'publisher 1',
                    stock: 50
                },
                {
                    name: 'Book 2',
                    price: 30000,
                    writer: "writer 2",
                    publisher: 'publisher 2',
                    stock: 40
                },
                {
                    name: 'Book 3',
                    price: 20000,
                    writer: "writer 3",
                    publisher: 'publisher 3',
                    stock: 50
                },
                {
                    name: 'Book 4',
                    price: 20000,
                    writer: "writer 4",
                    publisher: 'publisher 4',
                    stock: 50
                },
                {
                    name: 'Book 5',
                    price: 20000,
                    writer: "writer 5",
                    publisher: 'publisher 5',
                    stock: 50
                }
            ],
            selectBook: null
        }
    }

    actSelectBook = (book) => {
        this.setState({
            selectBook: book
        })
    }

    render(){
        const { books } = this.state;
        const listBooks = books.map((book, index) => {
            return(
                <BookItem actSelectBook={this.actSelectBook} key={index} book={book} />
            )
        });

        return(
            <div className="row">
                <div className="col-8">
                    <div className="list-group">
                        { listBooks }
                    </div>
                </div>
                <div className="col-4">
                    <DetailBook book={this.state.selectBook} />
                </div>
            </div>
        )
    }
}

export default Books;