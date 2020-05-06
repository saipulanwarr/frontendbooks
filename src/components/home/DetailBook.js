import React from 'react';

const detailBook = ({book}) => {
    return(
        <div>
            <p>Detail Book</p>
            { book ?  
                <table className="table">
                    <tbody>
                        <tr>
                            <td>Book Name</td>
                            <td>{book.name}</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>{book.price}</td>
                        </tr>
                        <tr>
                            <td>Writer</td>
                            <td>{book.writer}</td>
                        </tr>
                        <tr>
                            <td>Publisher</td>
                            <td>{book.publisher}</td>
                        </tr>
                    </tbody>
                </table>
                :
                null
            }
        </div>
    )
};

export default detailBook;