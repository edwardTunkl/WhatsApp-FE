import React, { useEffect, useState } from "react";

import { ListGroup, Image, Form, Button } from "react-bootstrap";
import { Row, Col, Navbar } from "react-bootstrap";
import { FaRegLifeRing } from "react-icons/fa";
import { BsFillChatLeftTextFill, BsThreeDotsVertical } from "react-icons/bs";

import { shallowEqual, useSelector } from "react-redux";
import axios from "axios";
import { SingleUser } from "./SingleUser";
import SearchUser from "./SearchUser";

// later

export default function User() {
  //we need to grab a history
  //we need to take all the members array , filter out those array and then
  //fetch all the users one by one and
  const chatHistory = useSelector((state) => state.chat.history);
  const UserId = useSelector((state) => state.user._id);

  function mapingHistoryUsers() {
    const newHistory = chatHistory.map((chat) =>
      chat.members.filter((member) => member !== UserId)
    );
    setUserList(...newHistory);
  }

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    if (UserId && chatHistory) {
      mapingHistoryUsers();
    }
  }, [UserId, chatHistory]);

  return (
    <div>
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
        <SearchUser />
        {userList &&
          userList.length > 0 &&
          userList.map((user) => <SingleUser key={user} userID={user} />)}
      </ListGroup>
    </div>
  );
}
