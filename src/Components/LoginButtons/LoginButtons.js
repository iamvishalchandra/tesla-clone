import React from "react";
import "./LoginButtons.style.css";

function LoginButtons({ name, type, onClick, isLogin }) {
  return (
    <div className="loginButtons">
      {isLogin ? (
        <button
          className="loginButtons__btn loginButtons__btn--login"
          type={type}
          onClick={onClick}
        >
          {name}
        </button>
      ) : (
        <button
          className="loginButtons__btn loginButtons__btn--signUp"
          type={type}
        >
          {name}
        </button>
      )}
    </div>
  );
}

export default LoginButtons;
