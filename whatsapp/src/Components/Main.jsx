import React from 'react'
import User from './User'
import Chat from './Chat'
import { Row, Col} from 'react-bootstrap'

export default function Main() {
  return (
    <div>
      <Row>
        <Col md={4}>
          <User />
        </Col>
        <Col md={8}>
          <Chat />
        </Col>
      </Row>
    </div>
  )
}
