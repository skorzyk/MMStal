import React from "react";
import "font-awesome/css/font-awesome.min.css";

import Navigation from "./Navigation";

import "../styles/Header.css";

import scrollBtn from "../images/svg/scroll 1.svg";
import logo from "../images/Mask Group.png";

class Header extends React.Component {
  state = { menuOpen: false };
  handlerMenu = () => {
    const menuBtn = document.querySelector(".menu-btn");
    const menuList = document.querySelector(".menu__list");

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
        <div className="header__menu--container">
          <img src={logo} alt="logo MMstal" className="header__logo" />
          <nav className="header__menu">
            {<Navigation open={this.handlerMenu} />}
          </nav>
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
        </div>
        <div className="header__desc--container" data-aos={"fade-up"}>
          <h2 className="header__desc--title">Z pasji do rzemiosła</h2>
          <h2 className="header__desc--title">
            Z pasji do <span className="stal"> stali</span>
          </h2>
          <p className="header__desc--text">
            Specjalizujemy się w metaplastyce, a do swoich wyrobów używamy
            najwyższej jakości stali. W naszej ofercie znajdą państwo bramy,
            balustrady, ogrodzenia, a także meble do domu. Usługi montażowe
            naszych produktów wykonujemy z ostrożnością i dbałością.
          </p>
        </div>
        <a href="#offerID" className="header__scroll">
          <img
            src={scrollBtn}
            alt="scroll button"
            className="header__scroll--btn"
          />
        </a>
      </>
    );
  }
}

export default Header;
