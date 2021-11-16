import React, { useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { GrEmoji } from "react-icons/gr";
import {
  Container,
  Col,
  Row,
  Form,
  Card,
  Modal,
  Button,
} from "react-bootstrap";

export default function Chat() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <Container className="ChatBody">
      <Row>
        <Col id="historyChat">
          <Col md={5} className="my-2">
            <Card className="my-1">
              <Card.Body>
                <Card.Text>Some text message </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={7} className="my-2">
            <Card className="my-1">
              <Card.Body>
                <Card.Text>Some another message </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={9} className="my-2">
            <Card className="my-1">
              <Card.Body>
                <Card.Text>Some text message </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                as="textarea"
                placeholder="Send a message"
                rows={2}
              />
            </Form.Group>
          </Form>
          <Col md={12} id="addPic">
            <Button onClick={handleShow}>
              Add + <AiOutlinePicture />
            </Button>

            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header >
                <Modal.Title>Add picture</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                ...
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  <ImCross />
                </Button>
                
              </Modal.Footer>
            </Modal>

            

            <Button
            //onClick={handleShow}
            >
              Add + <GrEmoji />
            </Button>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
