import React from "react";
import { HashRouter } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";
import Navigation from "./Navigation";

import "../styles/App.css";
import Page from "./Page";

class App extends React.Component {
  componentDidMount() {
    AOS.init();
  }
  render() {
    return (
      <HashRouter basename="/">
        <div className="app">
          <nav className="menu">{<Navigation />}</nav>
          <main className="page" id="pageID">
            {/* {<OfferItems />} */}
            {<Page />}
          </main>
          {/* <section className="ownOffer" id="wlasny-projekt">
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
          </section> */}
          <footer className="footer">{<Footer />}</footer>
        </div>
      </HashRouter>
    );
  }
}

export default App;
