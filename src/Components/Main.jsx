import React from "react";
import User from "./User";
import Chat from "./Chat";
import { Row, Col } from "react-bootstrap";
import NavbarRight from "./NavbarRight.jsx"


export default function Main() {
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
