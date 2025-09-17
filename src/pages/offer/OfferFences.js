import '../../styles/offer/OfferFences.css';

import offerFencesImages from '../../data/offerFences/offerFences.json';

import fencesExample1 from '../../images/wizualizacje/brama-wzor1.png';
import fencesExample2 from '../../images/wizualizacje/brama-wzor2.png';
import fencesExample3 from '../../images/wizualizacje/brama-wzor3.png';
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

const OfferFences = () => {
  return (
    <>
      <div className='offer-fences'>
        <BackButton />
        <h4>
          <span className='offer-fences__breadcrums-title'>Oferta </span>
          <span className='offer-fences__breadcrums-subtitle'>
            / Ogrodzenia pod wymiar
          </span>
        </h4>
        <h1>Ogrodzenia pod wymiar</h1>
        <p className='offer-fences__description'>
          Znajdziecie tu Państwo bramy przesuwne oraz dwuskrzydłowe ponadto
          furtki i przęsła ogrodzeniowe.
        </p>
        <p className='offer-fences__description'>
          Nasze produkty wykonujemy ze stali czarnej która jest poddawana
          obróbce i czyszczona następnie ocynkowana i malowana proszkowo.
        </p>
        <section className='offer-fences__examples'>
          <h3>Przykładowe wzory</h3>
          <div className='offer-fences__pattern'>
            <h4 className='offer-fences__pattern-name'>Wzór 1</h4>
            <div className='offer-fences__pattern-single'>
              <img
                className='offer-fences__pattern-img'
                src={fencesExample1}
                alt='przyklad'
              />
              <div className='offer-fences__pattern-description'>
                <div className='offer-fences__pattern-description-wrapper'>
                  <p className='offer-fences__pattern-description-title'>
                    Brama przesuwna
                  </p>
                  <p className='offer-fences__pattern-description-info'>
                    Wykonana z profila zamkniętego: rama 80x40x3 oraz
                    wypełnienie poziome 100x20x1,5 w odstępie 20 mm. Zastosowane
                    profile zamknięte są przykładowe, podobnie jak odstępy
                    pomiędzy wypełnieniem poziomym. Wymiary bramy dostosujemy do
                    Państwa indywidualnych potrzeb.
                  </p>
                </div>
                <div className='offer-fences__pattern-description-wrapper'>
                  <p className='offer-fences__pattern-description-title'>
                    Furtka
                  </p>
                  <p className='offer-fences__pattern-description-info'>
                    Furtka z pochwytem ze stali nierdzewnej, wykonana z profila
                    zamkniętego 60x40x2 oraz wypełnienie poziome 100x20x1,5 w
                    odstępie 20 mm. Zastosowane profile zamknięte są
                    przykładowe, podobnie jak odstępy pomiędzy wypełnieniem
                    poziomym. Wymiary furtki dostosujemy do Państwa
                    indywidualnych potrzeb.
                  </p>
                </div>
                <div className='offer-fences__pattern-description-wrapper'>
                  <p className='offer-fences__pattern-description-title'>
                    Przęsła ogrodzeniowe
                  </p>
                  <p className='offer-fences__pattern-description-info'>
                    Przęsła ogrodzeniowe wykonane z profila zamkniętego 40x40x2
                    oraz wypełnienie poziome 100x20x1,5 w odstępie 20 mm.
                    Zastosowane profile zamknięte są przykładowe, podobnie jak
                    odstępy pomiędzy wypełnieniem poziomym. Wymiary przęseł
                    ogrodzeniowych dostosujemy do Państwa indywidualnych
                    potrzeb.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='offer-fences__pattern'>
            <h4 className='offer-fences__pattern-name'>Wzór 2</h4>
            <div className='offer-fences__pattern-single'>
              <img
                className='offer-fences__pattern-img'
                src={fencesExample2}
                alt='przyklad'
              />
              <div className='offer-fences__pattern-description'>
                <div className='offer-fences__pattern-description-wrapper'>
                  <p className='offer-fences__pattern-description-title'>
                    Brama przesuwna
                  </p>
                  <p className='offer-fences__pattern-description-info'>
                    Samonośna brama o pionowym, ażurowym wypełnieniu. Rama z
                    profili 60x40x2 mm, rygle wzmacniające 40x20x2. Wypełnienie
                    z profili 20x20x1,5 mm ustawionych pionowo, prześwit między
                    szczeblinami ok. 85 mm. System jezdny na wózkach
                    łożyskowanych, przygotowanie pod automatykę (listwa zębata).
                    Wykończenie: ocynk ogniowy + malowanie proszkowe RAL (na
                    wizualizacji czarny mat). Wymiary i rozstawy dopasujemy do
                    Twojej posesji; możliwa także wersja dwuskrzydłowa.
                  </p>
                </div>
                <div className='offer-fences__pattern-description-wrapper'>
                  <p className='offer-fences__pattern-description-title'>
                    Furtka
                  </p>
                  <p className='offer-fences__pattern-description-info'>
                    Skrzydło na ościeżnicy 60x40x2 mm, rama skrzydła 50x50x2.
                    Wypełnienie pionowe z profili 18x18x1,5 mm w rozstawie 80–90
                    mm. W standardzie: pochwyt ze stali nierdzewnej, zamek na
                    wkładkę, zawiasy regulowane 3D z ogranicznikiem otwarcia. Na
                    życzenie dopasujemy kierunek otwierania, wysokość oraz
                    zakończenie szczeblin (proste lub z nasadkami ozdobnymi).
                    Parametry traktuj jako punkt wyjścia — dobierzemy je do
                    projektu.
                  </p>
                </div>
                <div className='offer-fences__pattern-description-wrapper'>
                  <p className='offer-fences__pattern-description-title'>
                    Przęsła ogrodzeniowe
                  </p>
                  <p className='offer-fences__pattern-description-info'>
                    Moduły o ramie 40x40x2 mm z wypełnieniem pionowym 20x20x1,5
                    mm. Rozstaw prętów ok. 85 mm zapewnia nowoczesny, lekki
                    wygląd i dobrą przejrzystość ogrodu. Montaż między słupkami
                    stalowymi lub betonowymi (obejmy/mocowania chemiczne).
                    Przekroje i odstępy możemy zmienić — wykonujemy także
                    gęstsze wypełnienie lub wyższe panele pod konkretne wymiary
                    działki.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='offer-fences__pattern'>
            <h4 className='offer-fences__pattern-name'>Wzór 3</h4>
            <div className='offer-fences__pattern-single'>
              <img
                className='offer-fences__pattern-img'
                src={fencesExample3}
                alt='przyklad'
              />
              <div className='offer-fences__pattern-description'>
                <div className='offer-fences__pattern-description-wrapper'>
                  <p className='offer-fences__pattern-description-title'>
                    Brama przesuwna
                  </p>
                  <p className='offer-fences__pattern-description-info'>
                    Panelowa brama z wycinanym laserowo motywem roślinnym
                    zapewniającym wysoki poziom prywatności. Rama 80x60x3 mm,
                    rygle 40x20x2 mm. Wypełnienie z blachy stalowej 3 mm
                    (krawędzie zagięte dla sztywności), prześwit wynikający z
                    wzoru ok. 10–30%. System samonośny na wózkach łożyskowanych,
                    przygotowanie pod automatykę i fotokomórki. Zabezpieczenie
                    antykorozyjne: ocynk ogniowy + malowanie proszkowe RAL (na
                    wizualizacji czarny mat). Wymiary bramy oraz skalę wzoru
                    dopasujemy do Państwa posesji. Podane przekroje traktować
                    jako przykładowe.
                  </p>
                </div>
                <div className='offer-fences__pattern-description-wrapper'>
                  <p className='offer-fences__pattern-description-title'>
                    Furtka
                  </p>
                  <p className='offer-fences__pattern-description-info'>
                    Ościeżnica 80x40x2 mm, rama skrzydła 60x40x2 mm.
                    Wypełnienie: panel z blachy 2–3 mm z tym samym motywem
                    wycinanym laserowo. Kierunek otwierania, wysokość oraz
                    gęstość wzoru dopasujemy do Państwa potrzeb. Parametry mają
                    charakter poglądowy.
                  </p>
                </div>
                <div className='offer-fences__pattern-description-wrapper'>
                  <p className='offer-fences__pattern-description-title'>
                    Przęsła ogrodzeniowe
                  </p>
                  <p className='offer-fences__pattern-description-info'>
                    Moduły pełne o ramie 40x40x2 mm z wypełnieniem z blachy 2–3
                    mm, wycinanej laserowo w motyw roślinny (lub w wersji
                    gładkiej, bez perforacji). Takie panele zapewniają osłonę
                    przed wzrokiem i wiatrem, zachowując lekki efekt
                    dekoracyjny. Montaż między słupkami stalowymi lub betonowymi
                    na obejmach/kotwach chemicznych. Dobierzemy wysokość,
                    szerokość, skalę wzoru i kolor z palety RAL; Wszystkie
                    wymiary przęseł dostosujemy do Państwa indywidualnych
                    potrzeb.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <GallerySlider
            images={offerFencesImages.images}
            breakpoints={breakpoints}
            title='Przykładowe realizacje'
            variant='submain'
          />
        </section>
      </div>
    </>
  );
};
export default OfferFences;
