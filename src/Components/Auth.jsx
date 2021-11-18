import { set } from "date-fns/esm";
import React from "react";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Main from "./Main";

function ProtectedRoute() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [fetchingUser, setFetchingUser] = useState(true);
  const [userInfo, setUserInfo] = useState(false);

  useEffect(() => {
    if (token) {
      const auth = async () => {
        try {
          let req = await fetch(process.env.REACT_APP_BE_URL + "/users/me", {
            method: "GET",
            headers: { Authorization: localStorage.getItem("token") },
          });
          if (req.ok) {
            let userInfo = await req.json();
            if (userInfo) {
              setAuthenticated(true);
            } else {
            }
          } else {
            throw new Error(req.statusText);
          }
        } catch (error) {
          console.log(error);
        }
      };
      auth();
      console.log(isAuthenticated);
      return () => {
        setFetchingUser(false);
        console.log("look here");
      };
    }
  }, [token]);

  // check if a user is auth,if(auth) wait for every code to run, then redirect

  console.log(isAuthenticated);

  return (
    <>
      {isAuthenticated && fetchingUser === false ? (
        <Main />
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default ProtectedRoute;
