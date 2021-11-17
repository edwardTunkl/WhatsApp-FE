import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import userReducer from "../reducers/userReducer";
import socketReducer from "../reducers/socketReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  user: {
    userName: "",
    _id: "",
    email: "",
    avatar: "",
  },

  socketIO: {
    socketID: "",
  },
};

// chat: {
//   active: "",
//   history: [],
// },
const bigReducer = combineReducers({
  user: userReducer,
  socketIO: socketReducer,
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
