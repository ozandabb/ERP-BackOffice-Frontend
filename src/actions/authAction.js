import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from './type'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode';
import Config from "../controllers/Config";

export const loginUser = (userDate) => dispatch => {
    axios.post(`${Config.host}${Config.port}/api/users/login`, userDate)
    .then(res => {
        //save to localstorage
         const { token } = res.data;
         //set token to local storage
         localStorage.setItem('jwtToken' , token);
         //set token to auth header
         setAuthToken(token);
         //decode
         const decoded = jwt_decode(token);
         //set current user
         dispatch(setCurrentUser(decoded));

    })
    .catch(err => dispatch({
        type : GET_ERRORS,
        payload : err.response.data
    }));
};

//set loged in user
export const setCurrentUser = (decoded) => {
    return{
        type : SET_CURRENT_USER,
        payload : decoded
    }
}