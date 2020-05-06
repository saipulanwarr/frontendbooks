import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { updateBook } from '../redux/actions/books';

class BookEdit extends Component{
    state = {
        name: '',
        writer: '',
        description: '',
        publisher: '',
        stock: ''
    }
    
    componentWillReceiveProps({book}){
        this.onSetValue(book);
    }

    onSetValue = (book) => {
        this.setState({
            name: book.name,
            writer: book.writer,
            description: book.description,
            publisher: book.publisher,
            stock: book.stock
        })
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = async(e) => {
        e.preventDefault();
        const id = this.props.book.id;
        await this.props.dispatch(updateBook(id, this.state));
        await this.props.onHide();
    }
    render(){
        const { show, onHide } = this.props;
        return(
            <Modal show={show} onHide={onHide} variant="lg">
                <Modal.Header>
                    <p>Edit Book</p>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" onChange={this.onChange} value={this.state.name} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Writer</Form.Label>
                            <Form.Control type="text" name="writer" onChange={this.onChange} value={this.state.writer} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" name="description" onChange={this.onChange} value={this.state.description} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Publisher</Form.Label>
                            <Form.Control type="text" name="publisher" onChange={this.onChange} value={this.state.publisher} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Stock</Form.Label>
                            <Form.Control type="text" name="stock" onChange={this.onChange} value={this.state.stock} />
                        </Form.Group>
                        <Button variant="primary" size="sm" type="submit">Save</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    }
}

export default connect()(BookEdit);