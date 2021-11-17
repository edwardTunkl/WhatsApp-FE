import { ListGroup, Image } from "react-bootstrap";
import { shallowEqual, useSelector } from "react-redux";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const SingleUser = (user) => {
  const [userData, setuserData] = useState({});
  const fetchUser = async (userId) => {
    let req = await axios.get(
      process.env.REACT_APP_BE_URL + "/users/user/" + userId
    );

    setuserData(req.data);
  };

  useEffect(() => {
    fetchUser(user);
  }, [user]);
  return (
    <>
      <ListGroup.Item>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXeetJy_lQByO02YIoUMv5EEh53T812OWaw&usqp=CAU" />
        NAME 4
      </ListGroup.Item>
    </>
  );
};
