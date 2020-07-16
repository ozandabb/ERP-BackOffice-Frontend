import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

const persistconfig = {
    key: "token",
    storage,
  };
  
  const rootReducer = combineReducers({
    auth: authReducer,
  });
  
  export const root = (state, action) =>
    rootReducer(action.type === "USER_LOGOUT" ? undefined : state, action);
  
  export default persistReducer(persistconfig, root);