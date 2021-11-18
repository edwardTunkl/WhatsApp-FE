import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Components/Main";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "./Components/Auth";

function App() {
  // const user = useSelector((state) => state.user);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <ProtectedRoute path="/" exact element={<Main />} />
          {/* <Route exact path="/">
            {user ? (element = <Main />) : <Navigate to="/login" />}
          </Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
