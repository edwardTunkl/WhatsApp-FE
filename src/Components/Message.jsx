import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../message.css";

export default function Message({ message }) {
  const myID = useSelector((state) => state.user._id);
  const isMyMessage = message.sender === myID;

  return (
    <div>
      {isMyMessage ? (
        <div className="myMessage"> {message.content.text} </div>
      ) : (
        <div className="notMyMessage">{message.content.text}</div>
      )}
    </div>
  );
}
