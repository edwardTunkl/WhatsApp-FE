import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form, FormControl } from "react-bootstrap";
import { socket } from "../actions/socket";
import "../sendText.css";
import { AiOutlinePaperClip } from "react-icons/ai";

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
      <AiOutlinePaperClip className="icon" />
      <Form className="form" onSubmit={(e) => sendMessage(e)}>
        <FormControl
          className="rounded"
          placeholder="Send a message"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
        />
      </Form>
    </div>
  );
}
