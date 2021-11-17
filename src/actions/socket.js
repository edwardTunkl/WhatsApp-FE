import { io } from "socket.io-client";
import { setHistoryChatById } from ".";

export const SET_INIT_SOCKET = "SET_INIT_SOCKET";
export const INCOMING_MESSAGE = "INCOMING_MESSAGE";

export const socket = io(process.env.REACT_APP_SOCKET_ADDRESS, {
  transports: ["websocket"],
  auth: { "Access-Token": process.env.REACT_APP_TOKEN }
});

export const setInitSocket = () => {
  return async (dispatch, getState) => {
    socket.on("connect", () => {
      console.log("CONNECTED");
      console.log(socket);
    });
    socket.on("join", (roomId) => {
      console.log(roomId);
    });
    socket.on("incoming-msg", (chatId) => {
      console.log("this");
      console.log(chatId);
      dispatch(setHistoryChatById(chatId));
    });
    dispatch({ type: SET_INIT_SOCKET, payload: "socketID" });
  };
};
