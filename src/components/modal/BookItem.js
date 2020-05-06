import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';

const BookItem = ({book, onSelectItemBookEdit, onSelectBookDelete}) => {

    const onClickEdit = (e) => {
        e.preventDefault();
        onSelectItemBookEdit(book);
    }

    const onClickDelete = (e) => {
        e.preventDefault();
        onSelectBookDelete(book);
    }

    return(
        <Fragment>
            <tr>
                <td>{book.id}</td>
                <td>{book.name}</td>
                <td>{book.writer}</td>
                <td>{book.description}</td>
                <td>{book.publisher}</td>
                <td>{book.stock}</td>
                
                <td><Button variant="warning" size="sm" onClick={onClickEdit}>Edit</Button> - <Button variant="danger" size="sm" onClick={onClickDelete}>Delete</Button></td>
            </tr>
        </Fragment>
    )
}

export default BookItem;