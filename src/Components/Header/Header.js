import React from "react";
import "./Header.style.css";

function Header() {
  return (
    <div className="header">
      <div className="header__info">
        <div className="header__info__infoText">
          <h1 className="header__info__infoText__h1">Model 3</h1>
          <h4 className="header__info__infoText__h4">
            <span className="header__info__infoText__h4__span">
              Schedule a Touchless Test Drive
            </span>
          </h4>
        </div>
        <div className="header__info__actions">
          <button className="header__info__actions__button  header__info__actions__button--primary">
            Custom Order
          </button>
          <button className="header__info__actions__button  header__info__actions__button--secondary">
            Existing Inventory
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
