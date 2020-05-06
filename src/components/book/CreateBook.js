import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../redux/actions/books';

class CreateBook extends Component{
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

    onChange(e){
        this.setState({ [e.target.name] : e.target.value })
    }

    async onSubmit(e){
        e.preventDefault();
        console.log(this.props.books);

        await this.props.dispatch(createBook(this.state));
        this.props.history.push("/book");
    }

    render(){
        return(
            <div className="container">
                <h4 style={{ marginTop: "10px" }}>Add Book</h4>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Enter name" name="name" onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Writer</label>
                        <input type="text" className="form-control" placeholder="Enter writer" name="writer" onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" rows="6" placeholder="Enter Description" name="description" onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Publisher</label>
                        <input type="text" className="form-control" placeholder="Enter publisher" name="publisher" onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Year</label>
                        <input type="text" className="form-control" placeholder="Enter year" name="year" onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Stock</label>
                        <input type="text" className="form-control" placeholder="Enter stock" name="stock" onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Genre</label>
                        <input type="text" className="form-control" placeholder="Enter genre" name="genre" onChange={this.onChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        books: state
    }
}

export default connect(mapStateToProps)(CreateBook);