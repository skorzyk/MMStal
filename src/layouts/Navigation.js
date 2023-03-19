import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/Navigation.css";
import logo from "../images/svg/MMstal-logo-SVG.svg";

class Navigation extends React.Component {
  state = { menuOpen: false };
  handlerMenu = () => {
    const menuBtn = document.querySelector(".menu-btn");
    const menuList = document.querySelector(".menu__list");
    // if (
    //   menuBtn.classList.contains("open") &&
    //   menuList.classList.contains("show")
    // ) {
    //   menuBtn.classList.remove("open");
    //   menuList.classList.remove("show");
    // }
    console.log(menuBtn);

    // const menuBtn = document.querySelector(".menu-btn");
    // const menuList = document.querySelector(".menu__list");

    if (!this.state.menuOpen || !menuBtn.classList.contains("open")) {
      menuBtn.classList.add("open");
      menuList.classList.add("show");
      this.setState({
        menuOpen: true,
      });
    } else {
      menuBtn.classList.remove("open");
      menuList.classList.remove("show");
      this.setState({
        menuOpen: false,
      });
    }
  };
  render() {
    return (
      <>
        <img src={logo} alt="logo MMstal" className="menu__logo" />
        <ul className="menu__list">
          <li className="menu__item">
            <NavLink to="/" exact className="menu__link">
              Strona główna
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/oferta" className="menu__link">
              Oferta
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/projekt" className="menu__link">
              Własny projekt
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/realizacje" className="menu__link">
              Nasze realizacje
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/technologie" className="menu__link">
              Technologie
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/o-nas" className="menu__link">
              O nas
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/kontakt" className="menu__link">
              Kontakt
            </NavLink>
          </li>
        </ul>
        <div className="header__medias">
          <a
            href="https://www.facebook.com/MMstalMarcinPiszczek"
            target={"_blank"}
            alt="MMstal facebook"
            rel="noreferrer"
          >
            <span className="fa fa-facebook-square" aria-hidden="true"></span>
          </a>
          <a
            href="https://www.instagram.com/mmstal.pl/"
            target={"_blank"}
            alt="MMstal instagram"
            rel="noreferrer"
          >
            <span className="fa fa-instagram" aria-hidden="true"></span>
          </a>
        </div>
        <div className="menu-btn" onClick={this.handlerMenu}>
          <div className="menu-btn__burger"></div>
        </div>
      </>
    );
  }
}

export default Navigation;
