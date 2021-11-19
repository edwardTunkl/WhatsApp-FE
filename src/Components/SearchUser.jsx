import axios from "axios";

import { Form, ListGroup } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import DisplaySearchedUser from "./DisplaySearchedUser";

const SearchUser = () => {
  const [queryUser, setQueryUser] = useState("");
  const [searchedUsers, setSearchedUsers] = useState([]);

  let findPeople = async (e) => {
    e.preventDefault();
    try {
      const url =
        process.env.REACT_APP_BE_URL +
        `/users?username=${queryUser}&email=${queryUser}`;
      const req = await axios.get(url);
      console.log(req.data[0].username, "heyy there");
      if (req.status == 200) {
        setSearchedUsers(req.data);

        setQueryUser("");
        console.log(req.data, "eshdshsihdisudiusd");
      }
    } catch (error) {}
  };

  return (
    <div>
      <ListGroup.Item>
        <BiSearch />
        <Form onSubmit={(e) => findPeople(e)}>
          <Form.Control
            size="sm"
            type="text"
            placeholder="Search people "
            id="smallsearch"
            onChange={(e) => {
              setQueryUser(e.target.value);
            }}
            value={queryUser}
          />
        </Form>
      </ListGroup.Item>

      {searchedUsers &&
        // searchedUsers > 0 &&
        searchedUsers.map((user) => (
          <DisplaySearchedUser key={user._id} user={user} />
        ))}
    </div>
  );
};

export default SearchUser;
