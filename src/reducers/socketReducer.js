import { SET_INIT_SOCKET } from "../actions/socket";
import { initialState } from "../store";

const socketReducer = (state = initialState.socketIO, action) => {
  switch (action.type) {
    case SET_INIT_SOCKET: {
      return {
        socketID: action.payload,
      };
    }

    default:
      return state;
  }
};

export default socketReducer;
