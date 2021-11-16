import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";

import Main from "./Components/Main";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  return (
    <>
      <Router>
        <Switch>
        {/* <Route path="/login" component={Login}/> */}
        {/* <Route path="/register" component={Register}/> */}
        <Route path="/" exact component={Main} />
        <Route
            render={() => (
              <>
                <br />
                <h1 className="text-danger text-center m-5 p-5">
                  404 - NOT FOUND
                </h1>
              </>
            )}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
