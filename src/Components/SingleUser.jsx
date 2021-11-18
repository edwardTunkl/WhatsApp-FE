import { ListGroup, Image } from "react-bootstrap";
import { shallowEqual, useSelector } from "react-redux";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const SingleUser = (props) => {
  const [userData, setuserData] = useState({});
  const fetchUser = async (userid) => {
    const url = process.env.REACT_APP_BE_URL + "/users/user/" + userid;

    let req = await axios.get(url);

    setuserData(req.data);
  };

  useEffect(() => {
    if (props.userData) {
      fetchUser(props.userData);
    }
  }, [props.userData]);
  return (
    <>
      <ListGroup.Item>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXeetJy_lQByO02YIoUMv5EEh53T812OWaw&usqp=CAU" />
        NAME 4
      </ListGroup.Item>
    </>
  );
};
