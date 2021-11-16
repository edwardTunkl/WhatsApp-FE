import React from "react";

import { Container, Col, Row, Form } from "react-bootstrap";

export default function Chat() {
  return (
    <Container className="ChatBody">
      <Row>
        <Col id="body"></Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>.............😃🎉🐱‍👤(☞ﾟヮﾟ)☞......................</Form.Label>
              <Form.Control as="textarea" placeholder="Send a message" rows={2} />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
