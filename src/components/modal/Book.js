import React, { Component } from 'react';
import { Container, Col, Row, Button, Table, Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import queryString from 'query-string';
import { connect } from 'react-redux';

import { getBooks } from '../redux/actions/books';

import BookAdd from './BookAdd';
import BookItem from './BookItem';
import BookEdit from './BookEdit';
import BookDelete from './BookDelete';

class Book extends Component{
    state = {
        show: false,
        showEdit: false,
        showDelete: false,
        selectBook: null,
        selectBookDelete: null,
        search: "",
        page: 1,
    }

    componentDidMount(){
        this.onGetAllBooks();
        console.log('Component Did Mount');
        console.log(this.props.location);
        const search = queryString.parse(this.props.location.search);
        console.log(`search : ${search.q}`);
        console.log(`page: ${search.page}`);
    }

    onGetAllBooks = async() => {
        await this.props.dispatch(getBooks());
    }

    handleShow = () => {
        this.setState({
            show: true
        })
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }

    handleShowEdit = () => {
        this.setState({
            showEdit: true
        })
    }

    handleCloseEdit = () => {
        this.setState({
            showEdit: false
        })
    }

    handleShowDelete = () => {
        this.setState({
            showDelete: true
        })
    }

    handleCloseDelete = () => {
        this.setState({
            showDelete: false
        })
    }

    onSelectItemBookEdit = (book) => {
        this.setState({
            selectBook: book,
            showEdit: true 
        })
    }

    onSelectBookDelete = (book) => {
        this.setState({
            selectBookDelete: book,
            showDelete: true
        })
    }

    onChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    onSubmit = async(e) => {
        e.preventDefault();

        await this.props.history.push(`/modal-book/search?st=product&q=${this.state.search}`);

    }

    onPaginate = async(page) => {
        await this.setState({
            page: page
        })

        await this.props.history.push(`modal-book/search?st=product&q=${this.state.search}&page=${this.state.page}`);
    }

    render(){
        const { books } = this.props;

        const itemBook = books.books.map((book, index) => <BookItem book={book} key={index} onSelectItemBookEdit={this.onSelectItemBookEdit} onSelectBookDelete={this.onSelectBookDelete} />);
        
        return(
            <Container style={{ marginTop: "20px" }}>
                <Row style={{ marginBottom: "20px" }}>
                    <Col sm={10}>
                        <h4>Books</h4>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group>
                                <Form.Control type="text" name="p" onChange={this.onChange} />
                            </Form.Group>
                            <Button onClick={() => this.onPaginate(1)}>1</Button>
                            <Button onClick={() => this.onPaginate(2)}>2</Button>
                            <Button onClick={() => this.onPaginate(3)}>3</Button>
                        </Form>
                    </Col>
                    <Col sm={2}>
                        <Button variant="primary" size="sm" onClick={this.handleShow} >Add Book</Button>
                    </Col>
                </Row>
                <Table striped bordered hover size="sm">
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
                        {itemBook}
                    </tbody>
                </Table>

                <BookAdd show={this.state.show} onHide={this.handleClose} />
                <BookEdit show={this.state.showEdit} onHide={this.handleCloseEdit} book={this.state.selectBook} />
                <BookDelete show={this.state.showDelete} onHide={this.handleCloseDelete} book={this.state.selectBookDelete} />
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        books: state.books
    }
}

export default connect(mapStateToProps)(Book);