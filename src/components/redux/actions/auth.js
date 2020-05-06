import axios from 'axios';

export const login = (data) => {
    return{
        type: "LOGIN_USER",
        payload: axios({
            method: "POST",
            url: "http://localhost:8000/user/login",
            data: data
        })
    }
}

export const logout = () => {
    
    return{
        type: "LOGOUT_USER"
    }
}