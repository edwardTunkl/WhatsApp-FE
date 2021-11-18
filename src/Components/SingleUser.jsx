import { ListGroup, Image } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { setActiveUser } from "../actions";

//To-Dos:
// new dispatch to set active user

export const SingleUser = (props) => {
  const dispatch = useDispatch();

  const [userData, setuserData] = useState({});
  const fetchUser = async (userid) => {
    const url = process.env.REACT_APP_BE_URL + "/users/user/" + userid;

    let req = await axios.get(url);

    setuserData(req.data);
  };

  useEffect(() => {
    if (props.userID) {
      fetchUser(props.userID);
    }
  }, [props.userID]);
  return (
    <div onClick={() => dispatch(setActiveUser(props.userID))}>
      <ListGroup.Item>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXeetJy_lQByO02YIoUMv5EEh53T812OWaw&usqp=CAU" />
        NAME 4
      </ListGroup.Item>
    </div>
  );
};
