import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form, FormControl } from "react-bootstrap";
import { socket } from "../actions/socket";
import "../sendText.css";
import { AiOutlinePaperClip } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { CgSmileMouthOpen } from "react-icons/cg";

export default function SendText() {
  const activeUser = useSelector((state) => state.chat.active);
  const myID = useSelector((state) => state.user._id);

  const [messageText, setMessageText] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    socket.emit("outgoing-msg", {
      requestTargetId: activeUser,
      message: {
        sender: myID,
        content: {
          text: messageText,
          media: "String",
        },
      },
    });

    setMessageText("");
  };

  return (
    <div className="bottomBar d-flex">
      <div className="d-flex align-items-center">
        <CgSmileMouthOpen className="icon" />
        <AiOutlinePaperClip className="icon mr-3" />
      </div>
      <div className="d-flex align-items-center form-div">
        <Form className="form" onSubmit={(e) => sendMessage(e)}>
          <FormControl
            placeholder="Send a message"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
          />
        </Form>
        <div>
          <FaMicrophone className="icon ml-3" />
        </div>
      </div>
    </div>
  );
}
