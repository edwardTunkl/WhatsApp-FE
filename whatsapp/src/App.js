import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import User from "./Components/User";
import Chat from "./Components/Chat"

function App() {
  return (
    
      <Row>
        <Col md={4}>
          <User />
        </Col>
        <Col md={8}>
          <Chat /> 
        </Col>
      </Row>
    
  );
}

export default App;
