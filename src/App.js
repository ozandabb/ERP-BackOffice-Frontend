import React from "react";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode"
import { PersistGate } from 'redux-persist/integration/react'
import setAuthToken from "../src/utils/setAuthToken"
import { setCurrentUser, logoutUser } from "../src/actions/authAction"
import {store, persistor } from "../src/store/store"
import RootRouter from "./RootRouter";
import "../src/asserts/commoncss/alerts.css";

//check for token
if(localStorage.jwtToken){
  //set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //decode token and get user info
  const decoded = jwt_decode(localStorage.jwtToken);
  //set User and isathuenticated
  store.dispatch(setCurrentUser(decoded));

  //check for expired token
  const currentTime = Date.now / 1000;
  if(decoded.exp < currentTime ){
    //logout user
    store.dispatch(logoutUser());

    //redirect to login
    window.location.href = '/';
  }
}

function App() {
  return(

    <Provider store={store}>
     
        <RootRouter />
   
    </Provider>

  );
}

export default App;
