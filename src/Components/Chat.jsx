import React, { useEffect, useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { GrEmoji } from "react-icons/gr";
import "../chat.css";
import {
  Container,
  Col,
  Row,
  Form,
  Card,
  Modal,
  Button,
  Navbar
} from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";
import Message from "./Message";
import { socket } from "../actions/socket";
import { useDispatch } from "react-redux";
import { setHistoryChat, setHistoryChatById } from "../actions";
// TO-Dos:
// extract the active user

export default function Chat() {
  const [show, setShow] = useState(false);
  const [messages, setMessages] = useState([]);

  console.log("MESSAGES", messages);

  const [chatID, setChatID] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const activeUser = useSelector((state) => state.chat.active);
  const myId = useSelector((state) => state.user._id);
  const history = useSelector((state) => state.chat.history);
  const dispatch = useDispatch();
  // const playSound = () => {
  //   const url =
  //     "http://commondatastorage.googleapis.com/codeskulptor-assets/week7-bounce.m4a";
  //   const audio = new Audio(url);
  //   audio.play();
  // };

  //   // if (req.data[0].history[-1].sender != myId) {
  //   //   playSound();
  //   // }
  // });
  useEffect(() => {
    socket.removeListener("incoming-msg");
    socket.once("incoming-msg", async (incomingChatId) => {
      dispatch(setHistoryChat());
      console.log("trigger");
      socket.emit("makeJoin", incomingChatId);
      if (activeUser) {
        fetchMsg();
      }
    });
    return () => {};
  });

  const fetchMsg = async () => {
    let req = await axios.get(
      process.env.REACT_APP_BE_URL + "/chats/activeChat/" + activeUser,
      {
        headers: { Authorization: localStorage.getItem("token") }
      }
    );
    if (req.data[0]) {
      setChatID(req.data[0]._id);
      setMessages(req.data[0].history);
    }
  };

  useEffect(async () => {
    if (activeUser) {
      fetchMsg();
    }
  }, [activeUser]);

  return (
    <div id="bg" className="vh-100">
      <div id="layer">
        <Container className="ChatBody">
          {messages &&
            messages.length > 0 &&
            messages.map((m) => <Message message={m} key={m._id} />)}
        </Container>
      </div>
    </div>
  );
}
