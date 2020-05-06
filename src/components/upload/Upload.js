import React, { Component } from 'react';
import axios from 'axios';

class Upload extends Component{

    state = {
        name: '',
        avatar: ''
    }

    onChangeHandler = (e) => {
        console.log(e.target.files[0]);
        this.setState({
            avatar: e.target.files[0]
        })
    }

    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('avatar', this.state.avatar);
        data.append('name', this.state.name);

        axios
            .post('http://localhost:8000/uploads', data)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err);
            })

        // console.log(data);
    }

    render(){
        return(
            <div className="container">
                <h4>Upload File</h4>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" name="name" onChange={this.onChangeName}/>
                    </div>
                    <div className="form-group">
                        <label>Example file input</label>
                        <input type="file" className="form-control-file" name="avatar" onChange={this.onChangeHandler}/>
                    </div>
                    
                    <button className="btn btn-primary btn-sm">Save</button>
                 </form>
            </div>
        )
    }
}

export default Upload;