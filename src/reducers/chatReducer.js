import { SET_ACTIVE_USER, SET_HISTORY_CHAT } from "../actions";
import { INCOMING_MESSAGE } from "../actions/socket";
import { initialState } from "../store";

const chatReducer = (state = initialState.chat, action) => {
  switch (action.type) {
    case SET_HISTORY_CHAT: {
      return {
        ...state,
        history: action.payload,
      };
    }
    case INCOMING_MESSAGE: {
      const insertIntoHistory = () => {
        const targetElement = state.history.findIndex(
          (chat) => chat._id === action.payload._id
        );
        const newHistory = state.history;
        newHistory[targetElement] = action.payload;
        return newHistory;
      };

      return {
        ...state,
        history: insertIntoHistory(),
      };
    }
    case SET_ACTIVE_USER: {
      return {
        ...state,
        active: action.payload,
      };
    }
    default:
      return state;
  }
};

export default chatReducer;
