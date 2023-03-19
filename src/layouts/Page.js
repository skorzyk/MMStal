import React from "react";

import { Route, Routes } from "react-router-dom";
import Gallery from "../pages/Gallery";
import Main from "../pages/Main";
import Offer from "../pages/Offer";
import OfferItems from "../pages/OfferItems";
import OwnOffer from "../pages/OwnOffer";
import Technology from "../pages/Technology";
import Employers from "../pages/Employers";
import Contact from "../pages/Contact";
import Realization from "../pages/Realization";
import ContactPage from "../pages/Contact-Page";
import OfferFences from "../pages/offer/OfferFences";
import OfferConstructions from "../pages/offer/OfferConstructions";
import OfferFurtniture from "../pages/offer/OfferFurniture";
import OfferRailings from "../pages/offer/OfferRailings";
import OfferStairs from "../pages/offer/OfferStairs";

const Page = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/oferta/*" exact element={<OfferItems />} />
        <Route path="/oferta/ogrodzenia" exact element={<OfferFences />} />
        <Route
          path="/oferta/konstrukcje"
          exact
          element={<OfferConstructions />}
        />
        <Route path="/oferta/meble" exact element={<OfferFurtniture />} />
        <Route path="/oferta/balustrady" exact element={<OfferRailings />} />
        <Route path="/oferta/schody" exact element={<OfferStairs />} />
        <Route path="/projekt" exact element={<OwnOffer />} />
        <Route path="/realizacje" exact element={<Realization />} />
        <Route path="/technologie" exact element={<Technology />} />
        <Route path="/o-nas" exact element={<Employers />} />
        <Route path="/kontakt" exact element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default Page;
