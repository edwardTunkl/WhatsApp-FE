import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { format, parseISO } from "date-fns";
import "../message.css";

export default function Message({ message }) {
  const myID = useSelector((state) => state.user._id);
  const isMyMessage = message.sender === myID;

  return (
    <div>
      {isMyMessage ? (
        <div className="myMessage">
          <div> {message.content.text} </div>
          <div className="date">
            {" "}
            {format(parseISO(message.createdAt), "p")}
          </div>
        </div>
      ) : (
        <div className="notMyMessage">
          <div>{message.content.text}</div>
          <div className="date">{format(parseISO(message.createdAt), "p")}</div>
        </div>
      )}
    </div>
  );
}
