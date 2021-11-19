import React from "react";
import User from "./User";
import Chat from "./Chat";
import { Row, Col } from "react-bootstrap";
import NavbarRight from "./NavbarRight.jsx";
import SendText from "./SendText.jsx";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setInitSocket } from "../actions/socket.js";
import { setHistoryChat, setUserInfo } from "../actions";
import { socket } from "../actions/socket.js";
import "../main.css";

export default function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHistoryChat());
    dispatch(setUserInfo());
    dispatch(setInitSocket());
  }, []);

  return (
    <div id="container">
      <Row>
        <Col md={4} className="px-0">
          <User />
        </Col>
        <Col md={8} className="px-0">
          <NavbarRight />
          <Chat />
          <SendText />
        </Col>
      </Row>
    </div>
  );
}
