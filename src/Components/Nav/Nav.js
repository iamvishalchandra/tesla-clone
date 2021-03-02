import { Close, Menu } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Photos/Logos/tesla-logo.png";
import SidePanel from "../SidePanel/SidePanel";
import "./Nav_Style/Nav.css";

function Nav() {
  const [sidePanelOpen, setSidePanelOpen] = useState(false);

  return (
    <div className="nav">
      <div className="nav__logo">
        <Link to="/">
          <img className="nav__logo__img" src={Logo} alt="Tesla" />
        </Link>
      </div>
      <div className="nav__links">
        <Link
          className="nav__links__a nav__links__a__cars nav__links__a--1"
          to="/"
        >
          Model S
        </Link>

        <Link
          className="nav__links__a nav__links__a__cars nav__links__a--2"
          to="/"
        >
          Model 3
        </Link>

        <Link
          className="nav__links__a nav__links__a__cars nav__links__a--3"
          to="/"
        >
          Model X
        </Link>

        <Link
          className="nav__links__a nav__links__a__cars nav__links__a--4"
          to="/"
        >
          Model Y
        </Link>

        <Link
          className="nav__links__a nav__links__a__cars nav__links__a--5"
          to="/"
        >
          Cybertruck
        </Link>
        <Link
          className="nav__links__a nav__links__a__cars nav__links__a--6"
          to="/"
        >
          Powerwall
        </Link>
      </div>
      <div className="nav__login">
        <Link to="/shop" className={sidePanelOpen && "nav__login--hidden"}>
          Shop
        </Link>
        <Link to="/login" className={sidePanelOpen && "nav__login--hidden"}>
          Tesla Account
        </Link>
        <div
          className="nav__login__menu"
          onClick={() => {
            setSidePanelOpen(!sidePanelOpen);
          }}
        >
          {sidePanelOpen ? <Close /> : <Menu />}
          {sidePanelOpen && (
            <div className="nav__login__sidePanel">
              <SidePanel />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
