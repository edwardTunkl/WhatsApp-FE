import React from "react";
import { Navigate, Route } from "react-router-dom";

function ProtectedRoute({ element: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("token");
  console.log("this", isAuthenticated);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
}

export default ProtectedRoute;
