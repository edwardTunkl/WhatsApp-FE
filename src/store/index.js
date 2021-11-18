import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import userReducer from "../reducers/userReducer";
import socketReducer from "../reducers/socketReducer";
import chatReducer from "../reducers/chatReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// in chat/history we have the chat rooms
// each room has array of two users
// filter out oursellf
// -> list of people we have chat to
// -> list of our chats

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

const bigReducer = combineReducers({
  user: userReducer,
  socketIO: socketReducer,
  chat: chatReducer,
});

// 2)
const configureStore = createStore(
  bigReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

// now we'll use the third argument of createStore to INJECT a MIDDLEWARE into the flow
// for applying a middleware we'll need to use a function from redux called applyMiddleware()

export default configureStore;
