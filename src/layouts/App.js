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
        <section className="offer" id="offerID">
          {<OfferItems />}
        </section>
        <section className="ownOffer" id="ownOfferID">
          {<OwnOffer />}
        </section>
        <section className="gallery" id="galleryID">
          {<Gallery />}
        </section>
        <section className="history" id="historyID">
          {<HistoryMMStal />}
        </section>
        <section className="employers" id="employersID">
          {<Employers />}
        </section>
        <section className="contact" id="contactID">
          {<Contact />}
        </section>
        <footer className="footer">{<Footer />}</footer>
      </div>
    );
  }
}

export default App;
