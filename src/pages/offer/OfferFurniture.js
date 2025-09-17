import '../../styles/offer/OfferFurniture.css';

import offerFurnitureImages from '../../data/offerFurniture/offerFurniture.json';

import GallerySlider from '../Gallery';
import BackButton from '../../components/BackButton/BackButton';

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

const OfferFurtniture = () => {
  return (
    <>
      <div className='offer-furniture'>
        <BackButton />
        <h4>
          <span className='offer-furniture__breadcrums-title'>Oferta </span>
          <span className='offer-furniture__breadcrums-subtitle'>
            / Meble loftowe
          </span>
        </h4>
        <h1>Meble loftowe</h1>
        <p className='offer-furniture__description'>
          Przez bardzo duże zainteresowanie i częste pytania postanowiliśmy
          poszerzyć nasza działalność o meble tyłu loft. Dziedzina ta jest
          bardzo rozwojowa i dostarcza nam wiele satysfakcji dlatego
          postanowiliśmy wyjść na przeciw waszym potrzebom.
        </p>
        <p className='offer-furniture__description'>
          W naszej przygodzie z meblami wykonywaliśmy już meble do salonu,
          sypialni, łazienki i kuchni. Dlatego poniżej przedstawimy państwu
          niektóre z naszych realizacji które, mamy nadzieję że, zachęca państwa
          do kontaktu i skorzystania z naszej oferty na meble do domu i biura
          lub przedstawieniu nam własnej koncepcji i pomysłu.
        </p>

        <section>
          <GallerySlider
            images={offerFurnitureImages.images}
            breakpoints={breakpoints}
            title='Nasze realizacje'
            variant='submain'
          />
        </section>
      </div>
    </>
  );
};
export default OfferFurtniture;
