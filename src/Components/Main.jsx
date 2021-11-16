import React from 'react'
import User from './User'
import Chat from './Chat'
import { Row, Col, Navbar} from 'react-bootstrap'

export default function Main() {
  return (
    <>
    
  <Navbar bg="light"><Col md={4}>
    <Navbar.Brand href="#home"><img
        alt=""
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXjEvvLvYr01bE7eQ7QaFsEDEMd3eNzeBH3w&usqp=CAU"
        width="30"
        height="30"
        className="d-inline-block align-top"
      /> 🐞</Navbar.Brand></Col>
      <Col md={4} > </Col>
      <Col md={4} ><img
        alt=""
        src="https://media.istockphoto.com/photos/seven-spotted-ladybug-on-a-white-background-picture-id117485656?b=1&k=20&m=117485656&s=170667a&w=0&h=tqyVgEFteWRyebzvoFAf3IZyuoxdnXVejQR5VBPwczs="
        width="40"
       
        className="d-inline-block align-top"
      /> </Col>
      

  </Navbar>
  
  

      <Row>
        <Col md={4}>
          <User />
        </Col>
        <Col md={8}>
          <Chat />
        </Col>
      </Row>
    </>
  )
}
