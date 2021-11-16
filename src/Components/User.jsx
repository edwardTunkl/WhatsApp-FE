import React from "react";

import { ListGroup, Image, Container } from "react-bootstrap";

export default function User() {
  return (
    <Container className="listUsers">
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Image src="holder.js/50x50" roundedCircle />
          NAME 1
        </ListGroup.Item>
        <ListGroup.Item>
          <Image src="holder.js/50x50" roundedCircle />
          NAME 2
        </ListGroup.Item>
        <ListGroup.Item>
          <Image src="holder.js/50x50" roundedCircle />
          NAME 3
        </ListGroup.Item>
        <ListGroup.Item>
          <Image src="holder.js/50x50" roundedCircle />
          NAME 4
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
}
