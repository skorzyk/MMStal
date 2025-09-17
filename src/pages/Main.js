import Header from './Header';
import Contact from './Contact';
import GallerySlider from './Gallery';

import mainPageImages from '../data/mainPage/mainPage.json';

import React from 'react';
import Aos from 'aos';

const Main = () => {
  React.useEffect(() => {
    window.addEventListener('load', Aos.refresh);
    return () => window.removeEventListener('load', Aos.refresh);
  }, []);
  return (
    <>
      <div className='main-wrapper'>
        <header className='header'>
          <Header />
        </header>
        <section className='gallery' data-aos={'fade-up'}>
          <GallerySlider
            images={mainPageImages.images}
            title='Przykładowe realizacje'
          />
        </section>
        <section className='contact'>
          <Contact />
        </section>
      </div>
    </>
  );
};
export default Main;
