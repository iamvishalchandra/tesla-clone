import { LanguageOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../features/userSlice";
import { auth } from "../../firebase";
import Logo from "../../Photos/Logos/tesla-logo.png";
import LoginButtons from "../LoginButtons/LoginButtons";
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
        history.push(`/user`);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <div className="login__top">
        <div className="login__logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="login__lang">
          <LanguageOutlined />
          <span>en-US</span>
        </div>
      </div>
      <div className="login__info">
        <h1>Sign In</h1>
        <form className="login__form">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginButtons name="SIGN IN" type="submit" onClick={signIn} isLogin />
          <div className="login__or">
            <hr /> <span>OR</span> <hr />
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
