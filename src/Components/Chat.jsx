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
  Navbar,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";
import Message from "./Message";
import { socket } from "../actions/socket";
import { useDispatch } from "react-redux";
import { setHistoryChatById } from "../actions";
// TO-Dos:
// extract the active user

export default function Chat() {
  const [show, setShow] = useState(false);
  const [messages, setMessages] = useState([]);

  console.log("MESSAGES", messages);

  const [chatID, setChatID] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const activeUser = useSelector((state) => state.chat.active);

  socket.on("incoming-msg", async (incomingChatId) => {
    if (incomingChatId === chatID) {
      let req = await axios.get(
        process.env.REACT_APP_BE_URL + "/chats/activeChat/" + activeUser,
        {
          headers: { Authorization: process.env.REACT_APP_TOKEN },
        }
      );
      setMessages(req.data[0].history);
    }

    dispatch(setHistoryChatById(incomingChatId));
  });

  useEffect(async () => {
    if (activeUser) {
      let req = await axios.get(
        process.env.REACT_APP_BE_URL + "/chats/activeChat/" + activeUser,
        {
          headers: { Authorization: process.env.REACT_APP_TOKEN },
        }
      );
      setChatID(req.data[0]._id);
      setMessages(req.data[0].history);
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
