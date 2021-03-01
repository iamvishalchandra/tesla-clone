import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// import { Counter } from "./features/Counter";
import "./App.style.css";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Nav from "./Components/Nav/Nav";
import Signup from "./Components/Signup/Signup";

import { selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Nav />
            <Header />
          </Route>
          <Route path="/login">
            {user ? <Redirect exact to="/user" /> : <Login />}
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
