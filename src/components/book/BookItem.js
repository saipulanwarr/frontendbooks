import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

class BookItem extends Component{

    onDelete(id){
      axios
        .delete(`http://localhost:8000/book/${id}`)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }

    render(){
        const { books } = this.props;
        console.log('render');
        return(
            <Fragment>
                { books.map((book, idx) => 
                  <tr key={idx}>
                    <td>{book.id}</td>
                    <td>{book.name}</td>
                    <td>{book.writer}</td>
                    <td>{book.description}</td>
                    <td>{book.publisher}</td>
                    <td>{book.stock}</td>
                    <td><Link className="btn btn-warning btn-sm" to={`/edit-book/${book.id}`}>Edit</Link> | <button className="btn btn-danger btn-sm" onClick={this.onDelete.bind(this, book.id)}>Delete</button></td>
                  </tr>   
              )}
            </Fragment>
        )
    }
}

export default BookItem;