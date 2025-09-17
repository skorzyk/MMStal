import 'yet-another-react-lightbox/styles.css';

import offerRailingsInside from '../../data/offerRailingsInside/offerRailingsInside.json';

import GallerySlider from '../Gallery';

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

const OfferRailingsInside = () => {
  return (
    <>
      <h1>BALUSTRADY WEWNETRZNE</h1>
      <p className='offer-railings__description'>
        Nasza firma wyspecjalizowana w produkcji oraz montażu barierek,
        balustrad oraz poręczy ściennych oferuje dla swoich klientów najwyższej
        jakości usługi.
      </p>
      <p className='offer-railings__description'>
        W naszej ofercie znajdziecie państwo zarówno balustrady balkonowe oraz
        francuskie - okienne.
      </p>
      <br />
      <p className='offer-railings__description'>
        Wykonujemy balustrady wewnętrzne na wymiar — od minimalistycznych
        stalowych po eleganckie konstrukcje stal + drewno oraz balustrady
        całoszklane. Projekt dopasowujemy do stylu wnętrza, układu schodów i
        oczekiwań użytkowników.
      </p>
      <ul className='offer-railings__list'>
        <li className='offer-railings__list-item'>
          Materiały i wykończenia: stal malowana proszkowo w kolorach RAL
          (mat/połysk/struktura), stal nierdzewna szlif/satyna, poręcze z litego
          drewna (np. dąb, jesion), szkło hartowane/laminowane.
        </li>
        <li className='offer-railings__list-item'>
          Wypełnienia: pionowe lub poziome profile stalowe, panele pełne, szkło
          na rotulach lub w profilu bazowym.
        </li>
        <li className='offer-railings__list-item'>
          Mocowanie: do policzka schodów, do stopni lub do stropu/posadzki;
          systemy bezsłupkowe w profilu liniowym także dostępne.
        </li>
        <li className='offer-railings__list-item'>
          Bezpieczeństwo: wymiary i rozstawy elementów dobieramy zgodnie z
          przepisami (zwykle wysokość 90–110 cm, prześwity dostosowane m.in. do
          bezpieczeństwa dzieci).
        </li>
        <li className='offer-railings__list-item'>
          Opcje: poręcze drewniane lub stalowe, maskownice mocowań, bramki
          zabezpieczające.
        </li>
      </ul>
      <p className='offer-railings__description'>
        Działamy kompleksowo: pomiar i konsultacja, projekt/rysunki, produkcja i
        montaż. Prześlij rzut schodów lub wymiary i inspiracje — przygotujemy
        propozycje wzorów oraz wycenę dopasowaną do Twoich potrzeb.
      </p>
      <section>
        <GallerySlider
          images={offerRailingsInside.images}
          breakpoints={breakpoints}
          title='Przykładowe realizacje'
          variant='submain'
        />
      </section>
    </>
  );
};

export default OfferRailingsInside;
