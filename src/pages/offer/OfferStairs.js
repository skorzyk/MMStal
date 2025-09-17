import '../../styles/offer/OfferStairs.css';

import offerStairs from '../../data/offerStairs/offerStairs.json';
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

const OfferStairs = () => {
  return (
    <>
      <div className='offer-stairs'>
        <BackButton />
        <h4>
          <span className='offer-stairs__breadcrums-title'>Oferta </span>
          <span className='offer-stairs__breadcrums-subtitle'>/ Schody</span>
        </h4>
        <h1>Schody</h1>
        <p className='offer-stairs__description'>
          Poniżej mogą znaleźć państwo przykłady niektórych z wykonanych przez
          nas schodów.
        </p>
        <br />
        <p className='offer-stairs__description'>
          Każda konstrukcja jest wykonywana pod indywidualne potrzeby klienta, z
          uwzględnieniem najmniejszych szczegółów. Nasza firma może pochwalić
          się wieloma konstrukcjami nośnymi oraz konstrukcjami przemysłowymi pod
          różnego rodzaju roboty lub inne sprzęty wykorzystywane w przemyśle.
        </p>
        <br />
        <p className='offer-stairs__description'>
          Projektujemy i wykonujemy schody na wymiar — od lekkich konstrukcji
          loftowych po eleganckie modele łączące stal, drewno i szkło. Każdy
          projekt dopasowujemy do układu wnętrza, dostępnej przestrzeni i stylu
          domu, dbając o komfort użytkowania i bezpieczeństwo.
        </p>
        <ul className='offer-stairs__list'>
          <li className='offer-stairs__list-item'>
            Konstrukcje: na policzkach stalowych, z centralnym policzkiem,
            wspornikowe (kotwione do ściany), dywanowe, zabiegowe/kręcone;
            warianty otwarte lub z podstopniami.
          </li>
          <li className='offer-stairs__list-item'>
            Materiały: stal malowana proszkowo (pełna paleta RAL) lub
            nierdzewna; stopnie z litego drewna (np. dąb/jesion 30–40 mm),
            opcjonalnie szkło hartowane/laminowane.
          </li>
          <li className='offer-stairs__list-item'>
            Balustrady i poręcze: stalowe, drewniane, szklane — spójne
            stylistycznie z biegiem schodów.
          </li>
          <li className='offer-stairs__list-item'>
            Ergonomia i normy: parametry dobieramy zgodnie z przepisami (typowo
            wys. stopnia 16–19 cm, głębokość 26–30 cm, szerokość biegu od 90
            cm), stabilna i cicha praca konstrukcji.
          </li>
        </ul>

        <p className='offer-stairs__description'>
          Prześlij proszę wymiary (wysokość kondygnacji, plan biegu, szerokość),
          inspiracje i preferowany materiał — przygotujemy propozycję wzoru oraz
          wycenę dopasowaną do Twoich potrzeb.
        </p>

        <section>
          <GallerySlider
            images={offerStairs.images}
            breakpoints={breakpoints}
            title='Nasze realizacje'
            variant='submain'
          />
        </section>
      </div>
    </>
  );
};
export default OfferStairs;
