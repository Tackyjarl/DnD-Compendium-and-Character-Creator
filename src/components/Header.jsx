import headerLogo from "../assets/DnDLogo.svg";
import { Link, useLocation } from "react-router-dom";
import "../blocks/Header.css";
import React from "react";

function Header({ handleProfileButtonClick }) {
  const location = useLocation();
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" alt="D&D Logo" src={headerLogo} />
      </Link>
      <p className="header__title">D&D Character Creator</p>
      {/* <button className="header__button-build" type="button"> */}
      <div className="header__container">
        <nav>
          {location.pathname === "/" && (
            <Link to="/create" className="header__button-build">
              Create a Character
            </Link>
          )}
          {location.pathname === "/create" && (
            <Link to="/" className="header__button-build">
              Go to Compendium
            </Link>
          )}
        </nav>
        {/* </button> */}
        <div className="header__user-container">
          <p className="header__username">
            <img
              src=""
              alt="user avatar"
              className="header__avatar header__avatar_hidden"
            />
            <button
              className="header__placeholder"
              onClick={handleProfileButtonClick}
            >
              {"A"}
            </button>
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
