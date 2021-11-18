import { INCOMING_MESSAGE } from "./socket";

export const SET_USER_INFO = "SET_USER_INFO";
export const SET_ACTIVE_CHAT = "SET_ACTIVE_CHAT";
export const SET_HISTORY_CHAT = "SET_HISTORY_CHAT";
export const SET_HISTORY_CHAT_BY_ID = "SET_HISTORY_CHAT_BY_ID";
export const SET_MESSAGE_ON_SOCKET = "SET_MESSAGE_ON_SOCKET";

// // export const addUserToRoom = (user) => ({
// //   type: ADD_USER_TO_ROOM,
// //   payload: user,
// // });

export const setUserInfo = (name) => {
  return async (dispatch, getState) => {
    try {
      let req = await fetch(process.env.REACT_APP_BE_URL + "/users/me", {
        method: "GET",
        headers: { Authorization: localStorage.getItem("token") },
      });
      if (req.ok) {
        let userInfo = await req.json();
        console.log(userInfo);
        dispatch({
          type: SET_USER_INFO,
          payload: userInfo,
        });
      } else {
        throw new Error(req.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const setActiveChat = (chatId) => ({
  type: SET_ACTIVE_CHAT,
  payload: chatId,
});

export const setMessageOnSocket = (chat) => ({
  type: SET_MESSAGE_ON_SOCKET,
  payload: chat,
});

export const setHistoryChat = () => {
  return async (dispatch, getState) => {
    try {
      let req = await fetch(process.env.REACT_APP_BE_URL + "/chats", {
        method: "GET",
        headers: { Authorization: localStorage.getItem("token") },
      });
      if (req.ok) {
        let chatInfo = await req.json();
        dispatch({
          type: SET_HISTORY_CHAT,
          payload: chatInfo,
        });
      } else {
        throw new Error(req.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const setHistoryChatById = (chatId) => {
  return async (dispatch, getState) => {
    try {
      let req = await fetch(process.env.REACT_APP_BE_URL + "/chats/" + chatId, {
        method: "GET",
        headers: { Authorization: localStorage.getItem("token") },
      });
      if (req.ok) {
        let chatData = await req.json();
        dispatch({
          type: INCOMING_MESSAGE,
          payload: chatData,
        });
      } else {
        throw new Error(req.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };
};
