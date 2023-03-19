import { SRLWrapper } from "simple-react-lightbox";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "../styles/Gallery.css";

import balustrady1 from "../images/wlasne/balustrady2_wlasne.jpg";
import balustrady2 from "../images/wlasne/balustrady4_wlasne-crop.jpg";
import balustrady3 from "../images/wlasne/balustrady5_wlasne.jpg";
import balustrady4 from "../images/wlasne/balustrady6_wlasne.jpg";
import balustrady5 from "../images/wlasne/balustrady_wew_wlasne-crop.jpg";
import barierka from "../images/wlasne/barierka1.jpg";
import brama from "../images/wlasne/brama2_wlasne.jpg";
import brama2 from "../images/wlasne/brama3_wlasne.jpg";
import brama3 from "../images/wlasne/brama_wlasne.jpg";
import brama4 from "../images/wlasne/bramy_przesuwne_wlasne.jpg";
import ogrodzenia from "../images/wlasne/ogrodzenia2_wlasne.jpg";
import ogrodzenia2 from "../images/wlasne/ogrodzenia_wlasne-crop.jpg";
import Aos from "aos";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Gallery = () => {
  const options = {
    buttons: { backgroundColor: "#e67918" },
  };
  window.addEventListener("load", Aos.refresh);
  return (
    <>
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
          <SwiperSlide>
            <div className="slide-wrapper">
              <img src={ogrodzenia} alt="ogrodzenia" className="slide__img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-wrapper">
              <img src={brama3} alt="bramy" className="slide__img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-wrapper">
              <img src={balustrady3} alt="balustrady" className="slide__img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-wrapper">
              <img src={brama4} alt="bramy" className="slide__img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-wrapper">
              <img src={balustrady4} alt="balustrady" className="slide__img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-wrapper">
              <img src={balustrady5} alt="balustrady" className="slide__img" />
            </div>
          </SwiperSlide>
        </Swiper>
      </SRLWrapper>
    </>
  );
};

export default Gallery;
