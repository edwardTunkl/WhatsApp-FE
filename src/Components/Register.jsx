import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../register.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });
  console.log(user);
  //   const handleOnChange = (e, key) => {
  //     setUser({
  //       ...user,
  //       [key]: e.target.value,
  //     });
  //   };

  const submitSignUp = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("http://localhost:3001/users/account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log("data", data);
        localStorage.setItem("token", data.accessToken);
        setTimeout(function () {
          navigate("/");
        }, 3000);
      } else {
        console.log("Something went wrong...");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signup-cont">
      <div className="content-container-signup">
        <h1 className="signup-header pb-4 pt-2">SIGN-UP</h1>
        <Form
          onSubmit={(e) => {
            submitSignUp(e);
          }}
        >
          <Form.Control
            type="text"
            placeholder="username..."
            className="fullName-input my-3"
            value={user.username}
            // onChange={(e) => handleOnChange(e, "username")}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />

          <Form.Control
            type="password"
            placeholder="Password..."
            className="password-input my-3"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            // onChange={(e) => handleOnChange(e, "password")}
          />
          <Form.Control
            type="text"
            placeholder="Email..."
            className="email-input my-3"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            // onChange={(e) => handleOnChange(e, "email")}
          />
          <Button type="submit" className="log-in-btn my-2">
            SIGN-UP
          </Button>
        </Form>
        <p className="not-a-member-p pt-4 pb-2 m-0">
          Already a member?{" "}
          <Link to="/login" className="link-login">
            Log in now!
          </Link>
        </p>
      </div>
    </div>
  );
}
