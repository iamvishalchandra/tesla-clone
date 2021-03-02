import { Close, Menu } from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout, selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import Logo from "../../Photos/Logos/tesla-logo.png";
import ProductCard from "../ProductCard/ProductCard";
import SidePanel from "../SidePanel/SidePanel";
import "./Profile.style.css";

function Profile() {
  const [sidePanelOpen, setSidePanelOpen] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const logOut = (e) => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout());
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="profile">
      <div className="profile__top">
        <div className="profile__top__logo">
          <Link to="/">
            <img className="profile__top__logo__img" src={Logo} alt="Tesla" />
          </Link>
        </div>
        <div className="profile__top__links">
          <Link
            className="profile__top__links__a profile__top__links__a__car profile__top__links__a__car--1"
            to="/profile"
          >
            Model S
          </Link>
          <Link
            className="profile__top__links__a profile__top__links__a__car profile__top__links__a__car--2"
            to="/profile"
          >
            Model 3
          </Link>
          <Link
            className="profile__top__links__a profile__top__links__a__car profile__top__links__a__car--3"
            to="/profile"
          >
            Model X
          </Link>
          <Link
            className="profile__top__links__a profile__top__links__a__car profile__top__links__a__car--4"
            to="/profile"
          >
            Model Y
          </Link>
          <Link
            className="profile__top__links__a profile__top__links__a__car profile__top__links__a__car--5"
            to="/profile"
          >
            Cybertruck
          </Link>
          <Link
            className="profile__top__links__a profile__top__links__a__car profile__top__links__a__car--6"
            to="/profile"
          >
            Powerwall
          </Link>

          <Link
            to="/shop"
            className={
              sidePanelOpen
                ? "profile__top__links__a--hidden"
                : "profile__top__links__a profile__top__links__a--7"
            }
          >
            Shop
          </Link>
          <Link
            to="/login"
            className={
              sidePanelOpen
                ? "profile__top__links__a--hidden"
                : "profile__top__links__a profile__top__links__a--8"
            }
          >
            Tesla Account
          </Link>
          <Link
            className={
              sidePanelOpen
                ? "profile__top__links__a--hidden"
                : "profile__top__links__a profile__top__links__a--9"
            }
            onClick={logOut}
          >
            LogOut
          </Link>

          <div
            className="profile__top__menu"
            onClick={() => {
              setSidePanelOpen(!sidePanelOpen);
            }}
          >
            {sidePanelOpen ? (
              <div className="profile__top__menu__sidePanel">
                <Close className="profile__top__menu__sidePanel__icon profile__top__menu__sidePanel__icon--close" />
                <SidePanel />
              </div>
            ) : (
              <Menu className="profile__top__menu__sidePanel__icon--menu profile__top__menu__sidePanel__icon--menu" />
            )}
          </div>
        </div>
      </div>
      <div className="profile__info">
        <div className="profile__info__user">
          <h4 className="profile__info__user__h4">
            {user?.displayName + "'s"} Tesla
          </h4>
        </div>
        <div className="profile__info__userSection">
          <Link className="profile__info__userSection__a profile__info__userSection__a--home">
            Home
          </Link>
          <Link className="profile__info__userSection__a profile__info__userSection__a--account">
            Account
          </Link>
          <Link className="profile__info__userSection__a profile__info__userSection__a--history">
            History
          </Link>
          <Link
            className="profile__info__userSection__a profile__info__userSection__a--signout"
            onClick={logOut}
          >
            Sign Out
          </Link>
        </div>
      </div>
      <div className="profile__products">
        <ProductCard
          image="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815"
          name="Model S"
          testDriveAvailable
        />
        <ProductCard
          image="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815"
          name="Model X"
        />
      </div>
    </div>
  );
}

export default Profile;
