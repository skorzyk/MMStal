import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./Header";
import OfferItems from "./OfferItems";
import OwnOffer from "./OwnOffer";
import Gallery from "./Gallery";
import HistoryMMStal from "./HistoryMMStal";
import Employers from "./Employers";
import Contact from "./Conctact";
import Footer from "./Footer";

import "../styles/App.css";

class App extends React.Component {
  componentDidMount() {
    AOS.init();
  }
  render() {
    return (
      <div className="App">
        <header className="header" id="headerID">
          {<Header />}
        </header>
        <section className="offer" id="oferta">
          {<OfferItems />}
        </section>
        <section className="ownOffer" id="wlasny-projekt">
          {<OwnOffer />}
        </section>
        <section className="gallery" id="galeria">
          {<Gallery />}
        </section>
        <section className="history" id="historia">
          {<HistoryMMStal />}
        </section>
        <section className="employers" id="employersID">
          {<Employers />}
        </section>
        <section className="contact" id="kontakt">
          {<Contact />}
        </section>
        <footer className="footer">{<Footer />}</footer>
      </div>
    );
  }
}

export default App;
