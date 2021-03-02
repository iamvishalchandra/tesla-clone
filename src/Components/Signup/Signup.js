import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../features/userSlice";
import { auth } from "../../firebase";
import LabelInput from "../LabelInput/LabelInput";
import LoginButtons from "../LoginButtons/LoginButtons";
import LoginNav from "../LoginNav/LoginNav";
import "./Signup.style.css";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const signUp = (e) => {
    e.preventDefault();

    if (!firstName) return alert("Name cannot be empty..");

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user.updateProfile({
          displayName: firstName,
        });
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            // displayName: userAuth.user.displayName,
            displayName: firstName,
          })
        );
        history.push(`/profile`);
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="signup">
      <div className="signup__info">
        <h1 className="signup__info__h1">CREATE ACCOUNT</h1>
        <form className="signup__info__form">
          <LabelInput
            name="First Name"
            htmlFor="firstName"
            type="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <LabelInput
            name="Last Name"
            htmlFor="lastName"
            type="lastName"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
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
            name="CREATE ACCOUNT"
            type="submit"
            onClick={signUp}
            isTopButton
          />
          <div className="signup__info__form__break">
            <hr className="signup__info__form__break__hr signup__info__form__break__hr--1" />
            <span className="signup__info__form__break__span">OR</span>
            <hr className="signup__info__form__break__hr signup__info__form__break__hr--2" />
          </div>
          <Link to="/login">
            <LoginButtons name="SIGN IN" />
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
