import "../styles/OfferItems.css";

import przesuwneImg from "../images/przesuwne.png";
import dwuskrzydłoweImg from "../images/dwuskrzydlowe.png";
import furtkiImg from "../images/furtki.png";
import przeslaImg from "../images/przesla.png";
import balustradyImg from "../images/balustrady.png";
import mebleImg from "../images/meble.png";

const OfferItems = () => {
  return (
    <>
      <h3 className="offer__title" data-aos={"fade-up"}>
        Oferta
      </h3>
      <div className="offer__item" data-aos={"fade-up"}>
        <img
          src={przesuwneImg}
          alt="Bramy przesuwne zdjęcie"
          className="offer__img"
        />
        <span className="offer__border"></span>
        <p className="offer__desc">Bramy przesuwne</p>
      </div>
      <div className="offer__item" data-aos={"fade-up"}>
        <img
          src={dwuskrzydłoweImg}
          alt="Bramy dwuskrzydłowe zdjęcie"
          className="offer__img"
        />
        <span className="offer__border"></span>
        <p className="offer__desc">Bramy dwuskrzydłowe</p>
      </div>
      <div className="offer__item" data-aos={"fade-up"}>
        <img src={furtkiImg} alt="Furtki zdjęcie" className="offer__img" />
        <span className="offer__border"></span>
        <p className="offer__desc">Furtki</p>
      </div>
      <div className="offer__item" data-aos={"fade-up"}>
        <img src={przeslaImg} alt="Przęsła zdjęcie" className="offer__img" />
        <span className="offer__border"></span>
        <p className="offer__desc">Przęsła</p>
      </div>
      <div className="offer__item" data-aos={"fade-up"}>
        <img
          src={balustradyImg}
          alt="Balustrady zdjęcie"
          className="offer__img"
        />
        <span className="offer__border"></span>
        <p className="offer__desc">Balustrady</p>
      </div>
      <div className="offer__item" data-aos={"fade-up"}>
        <img
          src={mebleImg}
          alt="Meble do domu zdjęcie"
          className="offer__img"
        />
        <span className="offer__border"></span>
        <p className="offer__desc">Meble do domu</p>
      </div>
    </>
  );
};

export default OfferItems;
