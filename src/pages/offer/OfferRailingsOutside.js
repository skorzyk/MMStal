import { SRLWrapper } from 'simple-react-lightbox';
import { Swiper, SwiperSlide } from "swiper/react";
import exampleImg from '../../images/wlasne/barierka1.jpg';
import balustrady1 from "../../images/wlasne/balustrady2_wlasne.jpg";
import balustrady2 from "../../images/wlasne/balustrady4_wlasne-crop.jpg";
import barierka from "../../images/wlasne/barierka1.jpg";
import brama from "../../images/wlasne/brama2_wlasne.jpg";
import brama2 from "../../images/wlasne/brama3_wlasne.jpg";
import ogrodzenia2 from "../../images/wlasne/ogrodzenia_wlasne-crop.jpg";

const OfferRailingsOutside = () => {
    const options = {
        buttons: { backgroundColor: "#e67918" },
      };
  return (
    <>
      <h1>BALUSTRADY ZEWNĘTRZNE</h1>
      <p className='offer-railings__description'>
        Nasza firma wyspecjalizowana w produkcji oraz montażu barierek,
        balustrad oraz poręczy ściennych oferuje dla swoich klientów najwyższej
        jakość usługi.
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
              src={exampleImg}
              alt='przyklad'
            />
            <div className='offer-railings__pattern-description'>
              <div className='offer-railings__pattern-description-wrapper'>
                <p className='offer-railings__pattern-description-title'>
                  Balustrada zewnętrzna
                </p>
                <p className='offer-railings__pattern-description-info'>
                  Balustrada zewnętrzna z wypełnieniem pionowym: rama profil
                  zamknięty 40x40x2 z wypełnieniem pionowym 15x15x1,5 w odstępie
                  80mm. Zastosowane profile zamknięte są przykładowe jak i
                  odstępy pomiędzy wypełnieniem pionowym. Wymiary balustrad
                  dostosujemy do Państwa indywidualnych potrzeb.
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
              src={exampleImg}
              alt='przyklad'
            />
            <div className='offer-railings__pattern-description'>
              <div className='offer-railings__pattern-description-wrapper'>
                <p className='offer-railings__pattern-description-title'>
                  Balustrada zewnętrzna
                </p>
                <p className='offer-railings__pattern-description-info'>
                  Balustrada zewnętrzna z wypełnieniem poziomym: rama profil
                  zamknięty 40x40x2x z wypełnieniem poziomym 60x20x1,5 w
                  odstępie 20mm. Zastosowane profile zamknięte są przykładowe
                  jak i odstępy pomiędzy wypełnieniem pionowym. Wymiary
                  balustrad dostosujemy do Państwa indywidualnych potrzeb.
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
              src={exampleImg}
              alt='przyklad'
            />
            <div className='offer-railings__pattern-description'>
              <div className='offer-railings__pattern-description-wrapper'>
                <p className='offer-railings__pattern-description-title'>
                  Balustrada zewnętrzna
                </p>
                <p className='offer-railings__pattern-description-info'>
                  Balustrada zewnętrzna z wypełnieniem pionowym: rama profil
                  zamknięty 40x40x2 z wypełnieniem pionowym 15x15x1,5 w odstępie
                  80mm. Zastosowane profile zamknięte są przykładowe jak i
                  odstępy pomiędzy wypełnieniem pionowym. Wymiary balustrad
                  dostosujemy do Państwa indywidualnych potrzeb.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
      <SRLWrapper options={options}>
        <h2 className="gallery__title" data-aos={"fade-up"}>
          Przykładowe realizacje
        </h2>
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              slidesPerColumn: 1,
              pagination: { type: "bullets", clickable: true },
            },
            990: {
              slidesPerView: 2,
              slidesPerColumn: 1,
              pagination: { type: "fraction", clickable: true },
            },
            1200: {
              slidesPerView: 2,
              slidesPerColumn: 2,
              pagination: { type: "fraction", clickable: true },
            },
          }}
          spaceBetween={20}
          slidesPerColumnFill="row"
          autoplay={{ disableOnInteraction: true, delay: 5000 }}
          navigation
          pagination={{ type: "fraction", clickable: true }}
          data-aos={"fade-up"}
        >
          <SwiperSlide>
            <div className="slide-wrapper">
              <img src={balustrady1} alt="balustrady" className="slide__img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-wrapper">
              <img src={barierka} alt="barierki" className="slide__img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-wrapper">
              <img src={brama2} alt="bramy" className="slide__img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-wrapper">
              <img src={ogrodzenia2} alt="ogrodzenia" className="slide__img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-wrapper">
              <img src={balustrady2} alt="balustrady" className="slide__img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-wrapper">
              <img src={brama} alt="bramy" className="slide__img" />
            </div>
          </SwiperSlide>
        </Swiper>
      </SRLWrapper>
      </section>
    </>
  );
};

export default OfferRailingsOutside;