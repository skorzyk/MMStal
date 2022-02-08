import React from "react";

import "../styles/Navigation.css";

class Navigation extends React.Component {
  handlerMenu = () => {
    const menuBtn = document.querySelector(".menu-btn");
    const menuList = document.querySelector(".menu__list");
    if (
      menuBtn.classList.contains("open") &&
      menuList.classList.contains("show")
    ) {
      menuBtn.classList.remove("open");
      menuList.classList.remove("show");
    }
  };
  render() {
    return (
      <ul className="menu__list">
        <li className="menu__item">
          <a href="#oferta" className="menu__link" onClick={this.handlerMenu}>
            Oferta
          </a>
        </li>
        <li className="menu__item">
          <a
            href="#wlasny-projekt"
            className="menu__link"
            onClick={this.handlerMenu}
          >
            Własny projekt
          </a>
        </li>
        <li className="menu__item">
          <a href="#galeria" className="menu__link" onClick={this.handlerMenu}>
            Nasze realizacje
          </a>
        </li>
        <li className="menu__item">
          <a href="#historia" className="menu__link" onClick={this.handlerMenu}>
            O nas
          </a>
        </li>
        <li className="menu__item">
          <a href="#kontakt" className="menu__link" onClick={this.handlerMenu}>
            Kontakt
          </a>
        </li>
      </ul>
    );
  }
}

export default Navigation;
