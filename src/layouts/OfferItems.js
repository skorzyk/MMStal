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
        <img src={przesuwneImg} alt="Bramy przesuwne" className="offer__img" />
        <span className="offer__border"></span>
        <h4 className="offer__desc">Bramy przesuwne</h4>
      </div>
      <div className="offer__item" data-aos={"fade-up"}>
        <img
          src={dwuskrzydłoweImg}
          alt="Bramy dwuskrzydłowe"
          className="offer__img"
        />
        <span className="offer__border"></span>
        <h4 className="offer__desc">Bramy dwuskrzydłowe</h4>
      </div>
      <div className="offer__item" data-aos={"fade-up"}>
        <img src={furtkiImg} alt="Furtki" className="offer__img" />
        <span className="offer__border"></span>
        <h4 className="offer__desc">Furtki</h4>
      </div>
      <div className="offer__item" data-aos={"fade-up"}>
        <img src={przeslaImg} alt="Przęsła" className="offer__img" />
        <span className="offer__border"></span>
        <h4 className="offer__desc">Przęsła</h4>
      </div>
      <div className="offer__item" data-aos={"fade-up"}>
        <img src={balustradyImg} alt="Balustrady" className="offer__img" />
        <span className="offer__border"></span>
        <h4 className="offer__desc">Balustrady</h4>
      </div>
      <div className="offer__item" data-aos={"fade-up"}>
        <img src={mebleImg} alt="Meble do domu" className="offer__img" />
        <span className="offer__border"></span>
        <h4 className="offer__desc">Meble do domu</h4>
      </div>
    </>
  );
};

export default OfferItems;
