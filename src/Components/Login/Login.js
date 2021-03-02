import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../features/userSlice";
import { auth } from "../../firebase";
import LabelInput from "../LabelInput/LabelInput";
import LoginButtons from "../LoginButtons/LoginButtons";
import LoginNav from "../LoginNav/LoginNav";
import "./Login.style.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );

        history.push(`/profile`);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <LoginNav />

      <div className="login__info">
        <h1 className="login__info__h1">Sign In</h1>

        <form className="login__info__form">
          <LabelInput
            name="Email Address"
            htmlFor="email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <LabelInput
            name="Password"
            htmlFor="password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <LoginButtons
            name="SIGN IN"
            type="submit"
            onClick={signIn}
            isTopButton
          />
          <div className="login__info__form__break">
            <hr className="login__info__form__break__hr login__info__form__break__hr--1" />
            <span className="login__info__form__break__span">OR</span>
            <hr className="login__info__form__break__hr login__info__form__break__hr--2" />
          </div>
          <Link to="/signup">
            <LoginButtons name="CREATE ACCOUNT" />
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
