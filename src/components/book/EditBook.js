import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBook, updateBook } from '../redux/actions/books';

class EditBook extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            writer: '',
            description: '',
            publisher: '',
            year: '',
            stock: '',
            genre: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        this.getBook(this.props.match.params.bookId);
    }

    async getBook(id){
        await this.props.dispatch(getBook(id));

        const book = this.props.book[0];

        this.setState({
            name: book.name,
            writer: book.writer,
            description: book.description,
            publisher: book.publisher,
            year: book.year,
            stock: book.stock,
            genre: book.genre
        })
    }

    onChange(e){
        this.setState({ [e.target.name] : e.target.value })
    }

    async onSubmit(e){
        e.preventDefault();
        await this.props.dispatch(updateBook(this.props.match.params.bookId, this.state));
        this.props.history.push("/book");
        
    }

    render(){
        return(
            <div className="container">
                <h4 style={{ marginTop: "10px" }}>Edit Book</h4>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Enter name" name="name" onChange={this.onChange} value={this.state.name}/>
                    </div>
                    <div className="form-group">
                        <label>Writer</label>
                        <input type="text" className="form-control" placeholder="Enter writer" name="writer" onChange={this.onChange} value={this.state.writer} />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" rows="6" placeholder="Enter Description" name="description" onChange={this.onChange} value={this.state.description} />
                    </div>
                    <div className="form-group">
                        <label>Publisher</label>
                        <input type="text" className="form-control" placeholder="Enter publisher" name="publisher" onChange={this.onChange} value={this.state.publisher} />
                    </div>
                    <div className="form-group">
                        <label>Year</label>
                        <input type="text" className="form-control" placeholder="Enter year" name="year" onChange={this.onChange} value={this.state.year} />
                    </div>
                    <div className="form-group">
                        <label>Stock</label>
                        <input type="text" className="form-control" placeholder="Enter stock" name="stock" onChange={this.onChange} value={this.state.stock} />
                    </div>
                    <div className="form-group">
                        <label>Genre</label>
                        <input type="text" className="form-control" placeholder="Enter genre" name="genre" onChange={this.onChange} value={this.state.genre} />
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        book: state.books.book
    }
}

export default connect(mapStateToProps)(EditBook);