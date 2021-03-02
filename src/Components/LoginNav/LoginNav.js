import { LanguageOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Photos/Logos/tesla-logo.png";
import "./LoginNav.style.css";

function LoginNav() {
  return (
    <div className="loginNav">
      <div className="loginNav__logo">
        <Link to="/">
          <img className="loginNav__logo__image" src={Logo} alt="" />
        </Link>
      </div>
      <div className="loginNav__lang">
        <LanguageOutlined />
        <span className="loginNav__lang__span">en-US</span>
      </div>
    </div>
  );
}

export default LoginNav;
