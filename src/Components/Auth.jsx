import React from "react";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Main from "./Main";

function ProtectedRoute() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const [userInfo, setUserInfo] = useState(false);

  useEffect(async () => {
    if (token) {
      try {
        let req = await fetch(process.env.REACT_APP_BE_URL + "/users/me", {
          method: "GET",
          headers: { Authorization: localStorage.getItem("token") },
        });
        if (req.ok) {
          let userInfo = await req.json();
          if (userInfo) {
            setUserInfo(true);
          } else {
            return;
          }
        } else {
          throw new Error(req.statusText);
        }
      } catch (error) {
        console.log(error);
      }
      if (userInfo) {
        setAuthenticated(true);
      }
    }
  }, [userInfo]);

  useEffect(() => {
    if (isAuthenticated) {
      return () => {};
    }
  });
  console.log(isAuthenticated);

  return <>{isAuthenticated ? <Main /> : <Navigate to="/login" />}</>;
}

export default ProtectedRoute;
