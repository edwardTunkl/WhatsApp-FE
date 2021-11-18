import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form, FormControl } from "react-bootstrap";
import { socket } from "../actions/socket";

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
    <div>
      <Form onSubmit={(e) => sendMessage(e)}>
        <FormControl
          placeholder="Send a message"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
        />
      </Form>
    </div>
  );
}
