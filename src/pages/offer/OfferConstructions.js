import '../../styles/offer/OfferConstructions.css';
import GallerySlider from '../Gallery';

import offerConstructionsImages from '../../data/offerConstructions/offerConstructions.json';
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

const OfferConstructions = () => {
  return (
    <>
      <div className='offer-constructions'>
        <BackButton />
        <h4>
          <span className='offer-constructions__breadcrums-title'>Oferta </span>
          <span className='offer-constructions__breadcrums-subtitle'>
            / Konstrukcje stalowe
          </span>
        </h4>
        <h1>Konstrukcje stalowe</h1>
        <p className='offer-constructions__description'>
          Poniżej mogą znaleźć państwo przykłady niektórych z wykonanych przez
          nas konstrukcji stalowych oraz konstrukcji przemysłowych.
        </p>
        <br />
        <p className='offer-constructions__description'>
          Każda konstrukcja jest wykonywana pod indywidualne potrzeby klienta, z
          uwzględnieniem najmniejszych szczegółów. Nasza firma może pochwalić
          się wieloma konstrukcjami nośnymi oraz konstrukcjami przemysłowymi pod
          różnego rodzaju roboty lub inne sprzęty wykorzystywane w przemyśle.
        </p>
        <br />
        <p className='offer-constructions__description'>
          Projektujemy i wykonujemy konstrukcje stalowe na wymiar — od lekkiej
          małej architektury po nośne elementy do domu i firmy. Łączymy solidną
          stal z estetycznym wykończeniem, dopasowując rozwiązania do miejsca
          montażu, obciążeń i stylu inwestycji.
        </p>
        <p className='offer-constructions__description'>
          Każdą konstrukcję wykonujemy pod Twoje potrzeby — doradzimy optymalne
          przekroje, sposób mocowania i powłoki, tak aby całość była trwała,
          bezpieczna i estetyczna.
        </p>

        <section>
          <GallerySlider
            images={offerConstructionsImages.images}
            breakpoints={breakpoints}
            title='Nasze realizacje'
            variant='submain'
          />
        </section>
      </div>
    </>
  );
};
export default OfferConstructions;
