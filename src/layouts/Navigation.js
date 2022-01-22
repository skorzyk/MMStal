import React from "react";

import "../styles/Navigation.css";

class Navigation extends React.Component {
  state = { menuOpen: true };
  handlerMenu = () => {
    // const menuBtn = document.querySelector(".menu-btn");
    // const menuList = document.querySelector(".menu__list");
    // if (
    //   menuBtn.classList.contains("open") &&
    //   menuList.classList.contains("show")
    // ) {
    //   menuBtn.classList.remove("open");
    //   menuList.classList.remove("show");
    //   // this.setState({
    //   //   menuOpen: false,
    //   // });
    // }
    // this.setState({
    //   menuOpen: !this.state.menuOpen,
    // });
    // console.log(this.state);
  };
  render() {
    return (
      <ul className="menu__list">
        <li className="menu__item">
          <a href="#offerID" className="menu__link" onClick={this.handlerMenu}>
            Oferta
          </a>
        </li>
        <li className="menu__item">
          <a
            href="#ownOfferID"
            className="menu__link"
            onClick={this.handlerMenu}
          >
            Własny projekt
          </a>
        </li>
        <li className="menu__item">
          <a
            href="#galleryID"
            className="menu__link"
            onClick={this.handlerMenu}
          >
            Nasze realizacje
          </a>
        </li>
        <li className="menu__item">
          <a
            href="#historyID"
            className="menu__link"
            onClick={this.handlerMenu}
          >
            O nas
          </a>
        </li>
        <li className="menu__item">
          <a
            href="#contactID"
            className="menu__link"
            onClick={this.handlerMenu}
          >
            Kontakt
          </a>
        </li>
      </ul>
    );
  }
}

export default Navigation;
