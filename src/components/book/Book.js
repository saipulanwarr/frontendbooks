import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getBooks, deleteBook } from '../redux/actions/books';

import Spinner from '../layout/Spinner';

class Book extends Component {
  constructor(props){
    super(props);
  }

  async getBooks(){
    const {profile} = this.props.auth;
    const auth = {
      authorization: profile.token,
      "user-id": profile.id
    };

    // console.log(auth);
    await this.props.dispatch(getBooks(auth));
  }

  componentDidMount(){
    // console.log(this.props.auth.profile.token);
    this.getBooks();
  }

  async onDelete(id){
    await this.props.dispatch(deleteBook(id));
    this.getBooks();
  }

  render() {
    const { books, isLoading } = this.props.books;

    return (
      <div className="container">
        <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-10">
              <h4>Books</h4>
            </div>
            <div className="col-2">
                <Link className="btn btn-primary" to="/add-book">Add Book</Link>
            </div>
        </div>
        
        { books === null || isLoading ? <Spinner /> : 
          <table className="table table-bordered" style={{ marginTop: "20px" }}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Writer</th>
                <th scope="col">Description</th>
                <th scope="col">Publisher</th>
                <th scope="col">Stock</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
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
            </tbody>
          </table>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    books: state.books,
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Book);
