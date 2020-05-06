import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Books from './Books';

import { connect } from 'react-redux';
import { logout } from '../redux/actions/auth';

class Home extends Component{
    componentDidMount(){
        if(!this.props.auth.isAuthenticated){
            this.props.history.push("/login");
        }
    }

    onLogout(){
        this.props.dispatch(logout());
        this.props.history.push('/login');
    }

    render(){
        return(
            <div className="container">
                <h4 style={{ paddingTop: '10px' }}>Home</h4>
                <p>Welcome, {this.props.auth.profile.name} <Link to="#" onClick={this.onLogout.bind(this)}>Logout</Link></p>
                <Books />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Home);