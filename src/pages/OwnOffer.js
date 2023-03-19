import "../styles/OwnOffer.css";

import dollarImg from "../images/svg/dolar 1.svg";
import miarkaImg from "../images/svg/miarka 1.svg";
import hamerImg from "../images/svg/hamer 1.svg";
import carImg from "../images/svg/car 1.svg";

const OwnOffer = () => {
  return (
    <>
      <section className="ownOffer">
        <div className="ownOffer--container">
          <h2 className="ownOffer__title" data-aos={"fade-up"}>
            Nie znalazłeś interesującej Cię rzeczy w naszej ofercie?
          </h2>
          <div className="ownOffer__desc--container">
            <h3 className="ownOffer__subtitle" data-aos={"fade-up"}>
              Nic nie szkodzi! Zrealizujemy projekt według{" "}
              <span className="ownIdea">Twojego pomysłu!</span>
            </h3>
            <p className="ownOffer__desc" data-aos={"fade-up"}>
              W naszej pracy cenimy sobie nowe wyzwania i pomysły, dlatego jeśli
              masz swój własny projekt przedstaw go nam, a my zrealizujemy go
              dla Ciebie! Naszymi głównymi atutami są solidność oraz dokładność
              wykonania.
            </p>
          </div>
          <h2 className="ownOffer__howWorks" data-aos={"fade-up"}>
            Jak to działa?
          </h2>
        </div>
        <div className="individualOffer--container">
          <div className="individualOffer__item" data-aos={"fade-right"}>
            <img
              src={dollarImg}
              alt="Indywidualna wycena dolar"
              className="individualOffer__img"
            />
            <p className="individualOffer__desc">
              <span className="number">1.</span> Indywidualna wycena
            </p>
          </div>
          <div className="individualOffer__item" data-aos={"fade-right"}>
            <img
              src={miarkaImg}
              alt="Indywidualna wycena miarka"
              className="individualOffer__img"
            />
            <p className="individualOffer__desc">
              <span className="number">2.</span> Dokładny pomiar
            </p>
          </div>
          <div className="individualOffer__item" data-aos={"fade-right"}>
            <img
              src={hamerImg}
              alt="Indywidualna wycena młotek"
              className="individualOffer__img"
            />
            <p className="individualOffer__desc">
              <span className="number">3.</span> Realizacja zamówienia
            </p>
          </div>
          <div className="individualOffer__item" data-aos={"fade-right"}>
            <img
              src={carImg}
              alt="Indywidualna wycena samochód"
              className="individualOffer__img"
            />
            <p className="individualOffer__desc">
              <span className="number">4.</span> Montaż lub wysyłka
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OwnOffer;
