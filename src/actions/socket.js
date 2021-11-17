import { connect, io } from "socket.io-client";

export const SET_INIT_SOCKET = "SET_INIT_SOCKET";

const socket = io(process.env.REACT_APP_SOCKET_ADDRESS, {
  extraHeaders: { "Access-Token": process.env.REACT_APP_TOKEN },
  transports: ["websocket"],
});

export const setInitSocket = () => {
  return async (dispatch, getState) => {
    socket.on("connect", () => {
      console.log("CONNECTED");
      console.log(socket);
    });
    dispatch({ type: SET_INIT_SOCKET, payload: "socketID" });
  };
};
