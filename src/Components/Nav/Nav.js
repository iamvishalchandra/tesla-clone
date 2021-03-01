import { Close, Menu } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Photos/Logos/tesla-logo.png";
import SidePanel from "../SidePanel/SidePanel";
import "./Nav_Style/Nav.css";

function Nav() {
  const [sidePanelOpen, setSidePanelOpen] = useState(false);

  return (
    <>
      <div className="nav">
        <div className="nav__logo">
          <Link to="/">
            <img src={Logo} alt="Tesla" />
          </Link>
        </div>
        <div className="nav__links">
          <Link to="/">Model S</Link>

          <Link to="/">Model 3</Link>

          <Link to="/">Model X</Link>

          <Link to="/">Model Y</Link>

          <Link to="/">Cybertruck</Link>
          <Link to="/">Powerwall</Link>
        </div>
        <div className="nav__login">
          <Link to="/" className={sidePanelOpen && "nav__login--hidden"}>
            Shop
          </Link>
          <Link to="/login" className={sidePanelOpen && "nav__login--hidden"}>
            Tesla Account
          </Link>
          <div
            className="nav__menu"
            onClick={() => {
              setSidePanelOpen(!sidePanelOpen);
            }}
          >
            {sidePanelOpen ? <Close /> : <Menu />}
            {sidePanelOpen && (
              <div className="nav__sidePanel">
                <SidePanel />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
