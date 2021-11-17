import React from "react";
import User from "./User";
import Chat from "./Chat";
import { Row, Col } from "react-bootstrap";
import NavbarRight from "./NavbarRight.jsx";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setInitSocket } from "..actions/socket.js";

export default function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInitSocket());
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
