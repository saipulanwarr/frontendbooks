import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { createBook } from '../redux/actions/books';

import { withRouter } from 'react-router-dom';

class BookAdd extends Component{
    state = {
        name: '',
        writer: '',
        description: '',
        publisher: '',
        stock: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = async(e) => {
        e.preventDefault();
        await this.props.dispatch(createBook(this.state));
        // this.props.history.push("/book");
        // console.log(this.props);
        await this.props.onHide();
    }
    render(){
        const { show, onHide } = this.props;
        return(
            <Modal show={show} onHide={onHide} variant="lg">
                <Modal.Header>
                    <p>Add Book</p>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" onChange={this.onChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Writer</Form.Label>
                            <Form.Control type="text" name="writer" onChange={this.onChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" name="description" onChange={this.onChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Publisher</Form.Label>
                            <Form.Control type="text" name="publisher" onChange={this.onChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Stock</Form.Label>
                            <Form.Control type="text" name="stock" onChange={this.onChange} />
                        </Form.Group>
                        <Button variant="primary" size="sm" type="submit">Save</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    }
}

export default withRouter(connect()(BookAdd));