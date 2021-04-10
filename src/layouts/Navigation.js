import React from "react";

import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <ul className="menu__list">
      <li className="menu__item">
        <a href="#offerID" className="menu__link">
          Oferta
        </a>
      </li>
      <li className="menu__item">
        <a href="#ownOfferID" className="menu__link">
          Własny projekt
        </a>
      </li>
      <li className="menu__item">
        <a href="#galleryID" className="menu__link">
          Nasze realizacje
        </a>
      </li>
      <li className="menu__item">
        <a href="#historyID" className="menu__link">
          O nas
        </a>
      </li>
      <li className="menu__item">
        <a href="#contactID" className="menu__link">
          Kontakt
        </a>
      </li>
    </ul>
  );
};

export default Navigation;
