import React from 'react';
import { HashRouter } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';
import Navigation from './Navigation';

import '../styles/App.css';
import 'yet-another-react-lightbox/styles.css';
import Page from './Page';

class App extends React.Component {
  componentDidMount() {
    AOS.init();
  }
  render() {
    return (
      <HashRouter basename='/'>
        <div className='app'>
          <nav className='menu'>{<Navigation />}</nav>
          <main className='page' id='pageID'>
            {<Page />}
          </main>

          <footer className='footer'>{<Footer />}</footer>
        </div>
      </HashRouter>
    );
  }
}

export default App;
