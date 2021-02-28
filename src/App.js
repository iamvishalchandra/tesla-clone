import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// import { Counter } from "./features/Counter";
import "./App.css";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Nav />
            <Header />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
