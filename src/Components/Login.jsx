import React from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../actions";
import { useState } from "react";

export default function Login({ history }) {
  const [logIn, setLogIn] = useState({
    email: "",
    password: "",
  });

  // const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleOnChange = (e, key) => {
    setLogIn({
      ...logIn,
      [key]: e.target.value,
    });
  };

  const handleSubmit = async ({ e, logIn }) => {
    e.preventDefault();
    try {
      let response = await fetch("http://localhost:3001/users/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(logIn),
      });
      if (response.ok) {
        let data = await response.json();
        localStorage.setItem("token", data.newAccessToken);
        let user = await findUserFromToken(data.newAccessToken);
        if (user) {
          dispatch(setUserInfo(user));
        }
        setTimeout(function () {
          history.push("/");
        }, 3000);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const findUserFromToken = async (token) => {
    try {
      let response = await fetch("http://localhost:3001/users/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      let data = await response.json();
      let user = data;
      return user;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>
        <h1>LOGIN</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Control
            type="text"
            placeholder="Email"
            className="my-3"
            value={logIn.email}
            onChange={(e) => handleOnChange(e, "email")}
          />
          <Form.Control
            type="password"
            placeholder="Password"
            className="my-3"
            value={logIn.password}
            onChange={(e) => handleOnChange(e, "password")}
          />
          <Form.Check type="checkbox" label="Remember me" className="my-3" />
          <Button type="submit" className="my-2">
            LOGIN
          </Button>
        </Form>
        <p className="py-4 m-0">
          Not a member?{" "}
          {/* <Link to="/register" className="link-register">
            Sign up now!
          </Link> */}
        </p>
      </div>
    </div>
  );
}
