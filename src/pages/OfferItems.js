import "../styles/OfferItems.css";

import przesuwneImg from "../images/przesuwne.png";
import dwuskrzydłoweImg from "../images/dwuskrzydlowe.png";
import furtkiImg from "../images/furtki.png";
import przeslaImg from "../images/przesla.png";
import balustradyImg from "../images/wlasne/balustrady6_wlasne.jpg";
import mebleImg from "../images/meble.png";
import ogrodzeniaPodWymiarImg from "../images/wlasne/brama2_wlasne.jpg";
import schodyImg from "../images/wlasne/balustrady_wew_wlasne-crop.jpg";
import konstrukcjeStaloweImg from "../images/konstrukcje stalowe.jpg";
import mebleLoftoweImg from "../images/komoda loftowa.png";
import { NavLink, Route, Routes } from "react-router-dom";
import OfferFences from "./offer/OfferFences";
import OfferConstructions from "./offer/OfferConstructions";

const OfferItems = () => {
  return (
    <>
      <section className="offer">
        <h3 className="offer__title" data-aos={"fade-up"}>
          Oferta
        </h3>
        <NavLink
          to="/oferta/ogrodzenia"
          exact
          className="offer__item"
          data-aos={"fade-up"}
        >
          <img
            src={ogrodzeniaPodWymiarImg}
            alt="Ogrodzenia pod wymiar"
            className="offer__img"
          />
          <h4 className="offer__desc">Ogrodzenia pod wymiar</h4>
        </NavLink>

        <NavLink
          to="/oferta/balustrady"
          exact
          className="offer__item"
          data-aos={"fade-up"}
        >
          <img src={balustradyImg} alt="Balustrady" className="offer__img" />
          <h4 className="offer__desc">Balustrady</h4>
        </NavLink>
        <NavLink
          to="/oferta/schody"
          exact
          className="offer__item"
          data-aos={"fade-up"}
        >
          <img src={schodyImg} alt="Schody" className="offer__img" />
          <h4 className="offer__desc">Schody</h4>
        </NavLink>
        <NavLink
          to="/oferta/konstrukcje"
          exact
          className="offer__item"
          data-aos={"fade-up"}
        >
          <img
            src={konstrukcjeStaloweImg}
            alt="Konstrukcje stalowe"
            className="offer__img"
          />
          <h4 className="offer__desc">Konstrukcje stalowe</h4>
        </NavLink>
        <NavLink
          to="/oferta/meble"
          exact
          className="offer__item"
          data-aos={"fade-up"}
        >
          <img
            src={mebleLoftoweImg}
            alt="Meble loftowe"
            className="offer__img"
          />
          <h4 className="offer__desc">Meble loftowe</h4>
        </NavLink>
      </section>
    </>
  );
};

export default OfferItems;
