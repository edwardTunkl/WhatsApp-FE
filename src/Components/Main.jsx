import React from "react";
import User from "./User";
import Chat from "./Chat";
import { Row, Col } from "react-bootstrap";
import NavbarRight from "./NavbarRight.jsx";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setInitSocket } from "../actions/socket.js";
import { setHistoryChat, setUserInfo } from "../actions";
import { socket } from "../actions/socket.js";

export default function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHistoryChat());
    dispatch(setUserInfo());
    dispatch(setInitSocket());
    setTimeout(() => {
      socket.emit("outgoing-msg", {
        requestTargetId: "6193875b075a2b1374ef76bc",
        message: {
          sender: "6193875b075a2b1374ef76bc",
          content: {
            text: "test message pls work",
            media: "testString"
          }
        }
      });
    }, 10000);
  }, []);

  return (
    <>
      <Row>
        <Col md={4}>
          <User />
        </Col>
        <Col md={8}>
          <NavbarRight />
          <Chat />
        </Col>
      </Row>
    </>
  );
}
