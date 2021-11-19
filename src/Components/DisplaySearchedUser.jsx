import React from "react";
import { ListGroup } from "react-bootstrap";
import "../Style/UsersList.css";
import { useDispatch } from "react-redux";
import { setActiveUser } from "../actions";

const DisplaySearchedUser = ({ user }) => {
  const { username, email, avatar, _id } = user;

  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(setActiveUser(_id))}>
      <ListGroup.Item id="one" className="d-flex">
        {avatar && <img id="image" src={avatar} />}
        <div>{username}</div>
        <div>{email}</div>
      </ListGroup.Item>
    </div>
  );
};

export default DisplaySearchedUser;
