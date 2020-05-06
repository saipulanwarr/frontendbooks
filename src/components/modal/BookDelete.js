import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { deleteBook } from '../redux/actions/books';

const BookDelete = (props) => {
    const {book, show, onHide, dispatch} = props;

    const onCancelHandle = (e) => {
        e.preventDefault();
        onHide();
    }

    const onDeleteHandle = async(e) => {
        e.preventDefault();

       await dispatch(deleteBook(book.id));
       onHide();
    }

    return(

        <Modal show={show} onHide={onHide} variant="lg">
            <Modal.Header>
                <p>Apakah Anda Yakin Ingin Menghapus Book {book ? book.name : ""} ini ?</p>
            </Modal.Header>
            <Modal.Body>
                <Button variant="primary" size="sm" onClick={onCancelHandle} style={{ marginRight: "10px" }}>Cancel</Button>
                <Button variant="danger" size="sm" onClick={onDeleteHandle}>Delete</Button>
            </Modal.Body>
        </Modal>
    )
}

export default connect()(BookDelete);