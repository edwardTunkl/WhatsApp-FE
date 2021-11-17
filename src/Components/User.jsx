import React from "react";

import { ListGroup, Image, Form } from "react-bootstrap";
import { Row, Col, Navbar } from "react-bootstrap";
import { FaRegLifeRing } from "react-icons/fa";
import { BsFillChatLeftTextFill, BsThreeDotsVertical } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

export default function User() {
  return (
    <>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Col>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXjEvvLvYr01bE7eQ7QaFsEDEMd3eNzeBH3w&usqp=CAU"
              width="30"
              height="30"
              className="d-inline-block align-top"
              roundedCircle
              id="userNav"
            />{" "}
            USER
          
            
          </Col>
        </ListGroup.Item>

        <ListGroup.Item>
          <BiSearch />
          <Form.Control
            size="sm"
            type="text"
            placeholder="Search people "
            id="smallsearch"
          />
        </ListGroup.Item>
        <ListGroup.Item>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXeetJy_lQByO02YIoUMv5EEh53T812OWaw&usqp=CAU"
            roundedCircle
          />
          NAME 1
        </ListGroup.Item>
        <ListGroup.Item>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXeetJy_lQByO02YIoUMv5EEh53T812OWaw&usqp=CAU"
            roundedCircle
          />
          NAME 2
        </ListGroup.Item>
        <ListGroup.Item>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXeetJy_lQByO02YIoUMv5EEh53T812OWaw&usqp=CAU"
            roundedCircle
          />
          NAME 3
        </ListGroup.Item>
        <ListGroup.Item>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXeetJy_lQByO02YIoUMv5EEh53T812OWaw&usqp=CAU"
            roundedCircle
          />
          NAME 4
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}
