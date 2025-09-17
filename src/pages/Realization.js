import 'yet-another-react-lightbox/styles.css';

import '../styles/Realization.css';

import ownConstrunctionsImages from '../data/ownConstructions/ownConstructions.json';
import ownFencesImages from '../data/ownFences/ownFences.json';
import ownFurnitureImages from '../data/ownFurniture/ownFurniture.json';
import ownRailingsImages from '../data/ownRailings/ownRailings.json';
import ownStairsImages from '../data/ownStairs/ownStairs.json';

import Aos from 'aos';
import GallerySlider from './Gallery';
import Tabs from '../components/Tabs/Tabs';

const breakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: { type: 'bullets', clickable: true },
    grid: { rows: 1 },
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: { type: 'fraction' },
    grid: { rows: 2, fill: 'row' },
  },
  1200: {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: { type: 'fraction' },
    grid: { rows: 2, fill: 'row' },
  },
};

const Realization = () => {
  window.addEventListener('load', Aos.refresh);

  const tabsConfig = [
    {
      label: 'Ogrodzenia na wymiar',
      content: (
        <GallerySlider
          images={ownFencesImages.images}
          breakpoints={breakpoints}
          title='Ogrodzenia na wymiar realizacje'
          variant='none'
        />
      ),
    },
    {
      label: 'Balustrady',
      content: (
        <GallerySlider
          images={ownRailingsImages.images}
          breakpoints={breakpoints}
          title='Balustrady realizacje'
          variant='none'
        />
      ),
    },
    {
      label: 'Schody',
      content: (
        <GallerySlider
          images={ownStairsImages.images}
          breakpoints={breakpoints}
          title='Schody realizacje'
          variant='none'
        />
      ),
    },
    {
      label: 'Konstrukcje stalowe',
      content: (
        <GallerySlider
          images={ownConstrunctionsImages.images}
          breakpoints={breakpoints}
          title='Konstrukcje stalowe realizacje'
          variant='none'
        />
      ),
    },
    {
      label: 'Meble loftowe',
      content: (
        <GallerySlider
          images={ownFurnitureImages.images}
          breakpoints={breakpoints}
          title='Meble loftowe realizacje'
          variant='none'
        />
      ),
    },
  ];

  return (
    <section className='gallery gallery--realization'>
      <h1 className='realizations-title'>NASZE REALIZACJE</h1>
      <Tabs tabs={tabsConfig} activeTabClassName='active-tab' />
    </section>
  );
};

export default Realization;
