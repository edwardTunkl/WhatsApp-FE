import React from "react";

import { ListGroup, Image, Container } from "react-bootstrap";

export default function User() {
  return (
    <>
      <ListGroup variant="flush">
        <ListGroup.Item className="pl-3">
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXeetJy_lQByO02YIoUMv5EEh53T812OWaw&usqp=CAU" roundedCircle />
          NAME 1
        </ListGroup.Item>
        <ListGroup.Item>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXeetJy_lQByO02YIoUMv5EEh53T812OWaw&usqp=CAU" roundedCircle />
          NAME 2
        </ListGroup.Item>
        <ListGroup.Item>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXeetJy_lQByO02YIoUMv5EEh53T812OWaw&usqp=CAU" roundedCircle />
          NAME 3
        </ListGroup.Item>
        <ListGroup.Item>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXeetJy_lQByO02YIoUMv5EEh53T812OWaw&usqp=CAU" roundedCircle />
          NAME 4
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}
