import React from "react";
import { Provider } from "react-redux";
import store from "../src/store/store"
import RootRouter from "./RootRouter";
import "../src/asserts/commoncss/alerts.css";

function App() {
  return(

  <Provider store={store}>
    <RootRouter />
  </Provider>

  );
}

export default App;
