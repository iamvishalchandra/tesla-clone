import React from "react";
import "./Header.style.css";

function Header() {
  return (
    <div className="header">
      <div className="header__info">
        <div className="header__infoText">
          <h1>Model 3</h1>
          <h4>
            <span>Schedule a Touchless Test Drive</span>
          </h4>
        </div>
        <div className="header__actions">
          <button className="header__primary">Custom Order</button>
          <button className="header__secondary">Existing Inventory</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
