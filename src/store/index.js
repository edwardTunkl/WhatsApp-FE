import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import mainReducer from "../reducers";

export const initialState = {
  user: {
    userName: "",
    _id: "",
    email: "",
    avatar: "",
  },
  chat: {
    active: "",
    history: [],
  },

  socketIO: {
    socketID: "",
  },
};

const configureStore = createStore(
  mainReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default configureStore;
