import '../../styles/offer/OfferFences.css';
// import '@material/react-tab-bar/dist/tab-bar.css';
// import '@material/react-tab-scroller/dist/tab-scroller.css';
// import '@material/react-tab/dist/tab.css';
// import '@material/react-tab-indicator/dist/tab-indicator.css';

import exampleImg from '../../images/wlasne/barierka1.jpg';

const OfferFences = () => {
  return (
    <>
      <div className='offer-fences'>
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
                src={exampleImg}
                alt='przyklad'
              />
              <div className='offer-fences__pattern-description'>
                <div className='offer-fences__pattern-description-wrapper'>
                  <p className='offer-fences__pattern-description-title'>
                    Brama przesuwna
                  </p>
                  <p className='offer-fences__pattern-description-info'>
                    Wykonana z profila zamkniętego: rama 80x40x3 oraz
                    wypełnienie poziome 80x20x1,5 w odstępie 20mm. Zastosowane
                    profile zamknięte są przykładowe jak i odstępy pomiędzy
                    wypełnieniem poziomym. Wymiary bramy dostosujemy do Państwa
                    indywidualnych potrzeb.
                  </p>
                </div>
                <div className='offer-fences__pattern-description-wrapper'>
                  <p className='offer-fences__pattern-description-title'>
                    Furtka
                  </p>
                  <p className='offer-fences__pattern-description-info'>
                    Furtka z pochwytem ze stali nierdzewnej, wykonana została z
                    profila zamkniętego: 40x40x2 oraz wypełnienie poziome
                    80x20x1,5 w odstępie 20mm. Zastosowane profile zamknięte są
                    przykładowe jak i odstępy pomiędzy wypełnieniem poziomym.
                    Wymiary furtki dostosujemy do Państwa indywidualnych
                    potrzeb.
                  </p>
                </div>
                <div className='offer-fences__pattern-description-wrapper'>
                  <p className='offer-fences__pattern-description-title'>
                    Przęsła ogrodzeniowe
                  </p>
                  <p className='offer-fences__pattern-description-info'>
                    Przęsła ogrodzeniowe wykonane z profila zamkniętego: 40x40x2
                    oraz wypełnienie poziome 80x20x1,5 odstępie 20mm.
                    Zastosowane profile zamknięte są przykładowe jak i odstępy
                    pomiędzy wypełnieniem poziomym. Wymiary przęseł
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
                src={exampleImg}
                alt='przyklad'
              />
              <div className='offer-fences__pattern-description'>
                <div className='offer-fences__pattern-description-wrapper'>
                  <p className='offer-fences__pattern-description-title'>
                    Brama przesuwna
                  </p>
                  <p className='offer-fences__pattern-description-info'>
                    Wykonana z profila zamkniętego: rama 80x40x3 oraz
                    wypełnienie poziome 80x20x1,5 w odstępie 20mm. Zastosowane
                    profile zamknięte są przykładowe jak i odstępy pomiędzy
                    wypełnieniem poziomym. Wymiary bramy dostosujemy do Państwa
                    indywidualnych potrzeb.
                  </p>
                </div>
                <div className='offer-fences__pattern-description-wrapper'>
                  <p className='offer-fences__pattern-description-title'>
                    Furtka
                  </p>
                  <p className='offer-fences__pattern-description-info'>
                    Furtka z pochwytem ze stali nierdzewnej, wykonana została z
                    profila zamkniętego: 40x40x2 oraz wypełnienie poziome
                    80x20x1,5 w odstępie 20mm. Zastosowane profile zamknięte są
                    przykładowe jak i odstępy pomiędzy wypełnieniem poziomym.
                    Wymiary furtki dostosujemy do Państwa indywidualnych
                    potrzeb.
                  </p>
                </div>
                <div className='offer-fences__pattern-description-wrapper'>
                  <p className='offer-fences__pattern-description-title'>
                    Przęsła ogrodzeniowe
                  </p>
                  <p className='offer-fences__pattern-description-info'>
                    Przęsła ogrodzeniowe wykonane z profila zamkniętego: 40x40x2
                    oraz wypełnienie poziome 80x20x1,5 odstępie 20mm.
                    Zastosowane profile zamknięte są przykładowe jak i odstępy
                    pomiędzy wypełnieniem poziomym. Wymiary przęseł
                    ogrodzeniowych dostosujemy do Państwa indywidualnych
                    potrzeb.
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
                src={exampleImg}
                alt='przyklad'
              />
              <div className='offer-fences__pattern-description'>
                <div className='offer-fences__pattern-description-wrapper'>
                  <p className='offer-fences__pattern-description-title'>
                    Brama przesuwna
                  </p>
                  <p className='offer-fences__pattern-description-info'>
                    Wykonana z profila zamkniętego: rama 80x40x3 oraz
                    wypełnienie poziome 80x20x1,5 w odstępie 20mm. Zastosowane
                    profile zamknięte są przykładowe jak i odstępy pomiędzy
                    wypełnieniem poziomym. Wymiary bramy dostosujemy do Państwa
                    indywidualnych potrzeb.
                  </p>
                </div>
                <div className='offer-fences__pattern-description-wrapper'>
                  <p className='offer-fences__pattern-description-title'>
                    Furtka
                  </p>
                  <p className='offer-fences__pattern-description-info'>
                    Furtka z pochwytem ze stali nierdzewnej, wykonana została z
                    profila zamkniętego: 40x40x2 oraz wypełnienie poziome
                    80x20x1,5 w odstępie 20mm. Zastosowane profile zamknięte są
                    przykładowe jak i odstępy pomiędzy wypełnieniem poziomym.
                    Wymiary furtki dostosujemy do Państwa indywidualnych
                    potrzeb.
                  </p>
                </div>
                <div className='offer-fences__pattern-description-wrapper'>
                  <p className='offer-fences__pattern-description-title'>
                    Przęsła ogrodzeniowe
                  </p>
                  <p className='offer-fences__pattern-description-info'>
                    Przęsła ogrodzeniowe wykonane z profila zamkniętego: 40x40x2
                    oraz wypełnienie poziome 80x20x1,5 odstępie 20mm.
                    Zastosowane profile zamknięte są przykładowe jak i odstępy
                    pomiędzy wypełnieniem poziomym. Wymiary przęseł
                    ogrodzeniowych dostosujemy do Państwa indywidualnych
                    potrzeb.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default OfferFences;