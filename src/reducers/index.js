import {
  
  SET_USERNAME,
} from "../actions";
import { initialState } from "../store";

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_TO_ROOM: {
      return {
        ...state,
        chat: {
          ...state.chat,
          chatRoom: state.chat.chatRoom.concat(action.payload),
        },
      };
    }
    
    
    case SET_USERNAME: {
      return {
        ...state,
        user: {
          ...state.user,
          userName: action.payload,
        },
      };
    }
    default:
      return state;
  }
};

export default mainReducer;
