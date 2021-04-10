import "../styles/HistoryMMStal.css";

const HistoryMMStal = () => {
  return (
    <>
      <h2 className="about__company" data-aos={"fade-up"}>
        O nas
      </h2>
      <div className="history--container" data-aos={"fade-up"}>
        <h3 className="history__title">Historia firmy</h3>
        <div className="history__column--container">
          <p className="history__desc--main">
            Firma powstała w 2007 roku, a wszystko zaczęło się od warsztatu
            wielkości garażu. Ciężką pracą i wytrwałością pozyskaliśmy kolejnych
            klientów, rozwinęliśmy swój warsztat oraz zdobyliśmy bezcenne
            doświadczenie.
          </p>
          <p className="history__date">
            Jesteśmy z wami od
            <br /> <span className="year">2007</span>
          </p>
        </div>
        <p className="history__desc--other">
          Firma rozwija się, a zdobyte doświadczenie pomaga nam w realizacji
          coraz to większych i bardziej skomplikowanych zleceń. Rozbudowa
          miejsca pracy przyniosła większe możliwości oraz okazje współpracy z
          firmami dla których produkowaliśmy konstrukcje wysyłane poza granice
          Polski. W ostatnim roku rozpoczęliśmy produkcję barierek na blok
          mieszkalny na jednym z krakowskich osiedli.
        </p>
      </div>
    </>
  );
};

export default HistoryMMStal;
