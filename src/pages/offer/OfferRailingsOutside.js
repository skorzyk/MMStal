import 'yet-another-react-lightbox/styles.css';

import offerRailingsOutside from '../../data/offerRailingsOutside/offerRailingsOutside.json';

import railingOutsideExample1 from '../../images/wizualizacje/barierka-wzor1.png';
import railingOutsideExample2 from '../../images/wizualizacje/barierka-wzor2.png';
import railingOutsideExample3 from '../../images/wizualizacje/barierka-wzor3.png';
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

const OfferRailingsOutside = () => {
  return (
    <>
      <h1>BALUSTRADY ZEWNĘTRZNE</h1>
      <p className='offer-railings__description'>
        Nasza firma wyspecjalizowana w produkcji oraz montażu barierek,
        balustrad oraz poręczy ściennych oferuje dla swoich klientów najwyższej
        jakości usługi.
      </p>
      <p className='offer-railings__description'>
        W naszej ofercie znajdziecie państwo zarówno balustrady balkonowe oraz
        francuskie - okienne.
      </p>
      <section className='offer-railings__examples'>
        <h3>Przykładowe wzory</h3>
        <div className='offer-railings__pattern'>
          <h4 className='offer-railings__pattern-name'>Wzór 1</h4>
          <div className='offer-railings__pattern-single'>
            <img
              className='offer-railings__pattern-img'
              src={railingOutsideExample1}
              alt='przyklad'
            />
            <div className='offer-railings__pattern-description'>
              <div className='offer-railings__pattern-description-wrapper'>
                <p className='offer-railings__pattern-description-title'>
                  Balustrada zewnętrzna
                </p>
                <p className='offer-railings__pattern-description-info'>
                  Nowoczesna balustrada z pionowym wypełnieniem — jak na
                  wizualizacji: balkony francuskie przy oknach oraz balustrada
                  tarasowa nad garażem. Konstrukcja ze stali: rama/słupki
                  40x40x2 mm, poręcz 40x20x2 mm, wypełnienie pionowe z profili
                  18x18x1,5 mm w rozstawie ok. 90 mm. Montaż do boku lub do
                  górnej powierzchni attyki; balkony francuskie kotwione do
                  elewacji na konsolach. Wykończenie: ocynk ogniowy + malowanie
                  proszkowe (na wizualizacji czarny mat). Zastosowane przekroje
                  i rozstawy są przykładowe — dopasujemy wysokość (najczęściej
                  ok. 110 cm), szerokości modułów i detale do Państwa projektu.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='offer-railings__pattern'>
          <h4 className='offer-railings__pattern-name'>Wzór 2</h4>
          <div className='offer-railings__pattern-single'>
            <img
              className='offer-railings__pattern-img'
              src={railingOutsideExample2}
              alt='przyklad'
            />
            <div className='offer-railings__pattern-description'>
              <div className='offer-railings__pattern-description-wrapper'>
                <p className='offer-railings__pattern-description-title'>
                  Balustrada zewnętrzna
                </p>
                <p className='offer-railings__pattern-description-info'>
                  Balustrada z poziomym wypełnieniem — spójna dla balkonów
                  francuskich i tarasu nad garażem. Konstrukcja stalowa:
                  słupki/ramy 40x40x2 mm, poręcz 40x20x2 mm. Wypełnienie z
                  profili prostokątnych 30x20x1,5 mm układanych poziomo, rozstaw
                  szczelin ok. 30–40 mm, co daje nowoczesną, “lamelową” linię i
                  dobrą ochronę prywatności. Montaż: do boku elewacji (balkony
                  francuskie) oraz do górnej krawędzi/wnętrza attyki (taras).
                  Wykończenie: ocynk ogniowy + malowanie proszkowe RAL (na
                  wizualizacji czarny mat). Podane przekroje i rozstawy są
                  przykładowe — dopasujemy wysokość (zwykle ok. 110 cm), gęstość
                  wypełnienia oraz sposób kotwienia do Państwa projektu.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='offer-railings__pattern'>
          <h4 className='offer-railings__pattern-name'>Wzór 3</h4>
          <div className='offer-railings__pattern-single'>
            <img
              className='offer-railings__pattern-img'
              src={railingOutsideExample3}
              alt='przyklad'
            />
            <div className='offer-railings__pattern-description'>
              <div className='offer-railings__pattern-description-wrapper'>
                <p className='offer-railings__pattern-description-title'>
                  Balustrada zewnętrzna
                </p>
                <p className='offer-railings__pattern-description-info'>
                  Balustrada o gęstym, pionowym wypełnieniu z płaskowników —
                  jednolita stylistycznie dla balkonów francuskich i tarasu nad
                  garażem. Konstrukcja: słupki/ramy 50x50x2 mm, poręcz 60x30x2
                  mm. Wypełnienie z płaskowników stalowych 30x5 mm ustawionych
                  pionowo, prześwit między lamelami ok. 25–30 mm, co daje wyższą
                  osłonę i elegancki, minimalistyczny wygląd. Montaż: balkony
                  francuskie kotwione do lica elewacji; taras mocowany do górnej
                  krawędzi attyki (stopy słupków maskowane). Wykończenie: ocynk
                  ogniowy + malowanie proszkowe RAL (na wizualizacji czarny
                  mat). Podane przekroje i rozstawy są przykładowe — wysokość
                  (zwykle ok. 110 cm), gęstość wypełnienia i sposób mocowania
                  dopasujemy do Państwa projektu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <GallerySlider
          images={offerRailingsOutside.images}
          breakpoints={breakpoints}
          title='Przykładowe realizacje'
          variant='submain'
        />
      </section>
    </>
  );
};

export default OfferRailingsOutside;
