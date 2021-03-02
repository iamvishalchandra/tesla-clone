import React from "react";
import "./LoginButtons.style.css";

function LoginButtons({ name, type, onClick, isTopButton }) {
  return (
    <div className="loginButtons">
      {isTopButton ? (
        <button
          className="loginButtons__btn loginButtons__btn--login"
          type={type}
          onClick={onClick}
        >
          {name}
        </button>
      ) : (
        <button className="loginButtons__btn loginButtons__btn--signUp">
          {name}
        </button>
      )}
    </div>
  );
}

export default LoginButtons;
