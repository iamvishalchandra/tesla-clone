import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.style.css";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Signup from "./Components/Signup/Signup";

import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(user);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else dispatch(logout());
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Nav />
            <Header />
          </Route>
          <Route path="/login">
            {user ? <Redirect exact to="/profile" /> : <Login />}
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/shop">
            <Nav />
          </Route>
          <Route path="/profile">
            {user ? <Profile /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
