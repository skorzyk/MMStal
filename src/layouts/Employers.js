import Adam1 from "../images/Adam_1920w.jpg";
import Adam2 from "../images/Adam_1280w.jpg";
import Adam3 from "../images/Adam_800w.jpg";
import Adam4 from "../images/Adam_460w.jpg";
import Marcin1 from "../images/Marcin_1920w.jpg";
import Marcin2 from "../images/Marcin_1280w.jpg";
import Marcin3 from "../images/Marcin_800w.jpg";
import Marcin4 from "../images/Marcin_460w.jpg";
import Marek1 from "../images/Marek_1920w.jpg";
import Marek2 from "../images/Marek_1280w.jpg";
import Marek3 from "../images/Marek_800w.jpg";
import Marek4 from "../images/Marek_460w.jpg";
import Romek1 from "../images/Romek_1920w.jpg";
import Romek2 from "../images/Romek_1280w.jpg";
import Romek3 from "../images/Romek_800w.jpg";
import Romek4 from "../images/Romek_460w.jpg";

import "../styles/Employers.css";

const Employers = () => {
  return (
    <>
      <h3 className="employers__title">Pracownicy</h3>
      <div className="employee--container" data-aos={"fade-right"}>
        <img
          srcSet={`${Marcin4} 460w, ${Marcin3} 800w, ${Marcin2} 1280w, ${Marcin1} 1920w`}
          src={Marcin1}
          alt="Marcin Piszczek MMstal"
          className="employee__img"
        />
        <div className="employee__desc--container">
          <h4 className="employee__name">
            Marcin <span className="employee__surname">Piszczek</span>
          </h4>
          <p className="employee__exp">15 lat doświadczenia</p>
          <p className="employee__desc">
            Prezes firmy, swoje doświadczenie od młodych lat zdobywał jako
            pracownik ogólnobudowlany, co pomogło zdobyć niezbędna wiedzę i
            umiejętności do prowadzenia firmy. Dzięki ciężkiej pracy i
            wytrwałości ukończył studia inżynierskie na Politechnice Krakowskiej
            i rozpoczął własną działalność. Marcin osobiście zajmuje się obsługą
            klientów i dbaniem o najwyższe standardy wykonywanych zleceń. Jego
            praca rozpoczyna się od bezpośredniego kontaktu z zainteresowanymi
            osobami poprzez wycenę, pomiar oraz wykonanie szczegółowych
            projektów danego przedmiotu. Jego wiedza i doświadczenie przekładają
            się na całokształt pracy wykonywanej w firmie, ponieważ bierze
            czynny udział we wszystkich etapach wykonywania oraz montażu
            projektów.
          </p>
        </div>
      </div>
      <div className="employee--container" data-aos={"fade-right"}>
        <img
          srcSet={`${Marek4} 460w, ${Marek3} 800w, ${Marek2} 1280w, ${Marek1} 1920w`}
          src={Marek1}
          alt="Marek Piszczek MMstal"
          className="employee__img employee__img--second"
        />
        <div className="employee__desc--container">
          <h4 className="employee__name">
            Marek <span className="employee__surname">Piszczek</span>
          </h4>
          <p className="employee__exp">40 lat doświadczenia</p>
          <p className="employee__permission">
            Uprawnienia spawalnicze: Elektroda, Migomat
          </p>
          <p className="employee__desc">
            Monter konstrukcji stalowych, spawacz. Swoje doświadczenie zdobywał
            w Polsce jak i poza granicami naszego kraju, biorąc udział w
            budowaniu hal o powierzchni od 50 do 100 metrów kwadratowych,
            poczynając od spawania, nadzór, aż po mistrza w budownictwie
            konstrukcji stalowych. Doświadczenie jakie posiada bezpośrednio
            przekłada się na jakość, jak i wytrzymałość konstrukcji jakie dla
            Państwa wykonujemy.
          </p>
        </div>
      </div>
      <div className="employee--container" data-aos={"fade-right"}>
        <img
          srcSet={`${Romek4} 460w, ${Romek3} 800w, ${Romek2} 1280w, ${Romek1} 1920w`}
          src={Romek1}
          alt="Romek Kozik MMstal"
          className="employee__img"
        />
        <div className="employee__desc--container">
          <h4 className="employee__name">
            Romek <span className="employee__surname">Kozik</span>
          </h4>
          <p className="employee__exp">35 lat doświadczenia</p>
          <p className="employee__permission">
            Uprawnienia spawalnicze: Elektroda, Migomat, Spawanie gazowe
          </p>
          <p className="employee__desc">
            Spawacz, swoją karierę rozpoczął już w młodym wieku, gdy ukończył
            szkołę zawodową o profilu ślusarz-spawacz. W toku swojej pracy
            wykonywał konstrukcje stalowe między innymi wieże telekomunikacyjne,
            słupy wysokiego napięcia, elementy stałe hal. Konstrukcje które
            wykonywał sięgały do 60-70 metrów, a grubość materiału wynosiła od
            2mm do 40mm. Warto nadmienić, że większość wykonywanych prac była
            poddawana badaniom RTG co świadczy o dokładności wykonywanych łączeń
            spawalniczych.
          </p>
        </div>
      </div>
      <div className="employee--container" data-aos={"fade-right"}>
        <img
          srcSet={`${Adam4} 460w, ${Adam3} 800w, ${Adam2} 1280w, ${Adam1} 1920w`}
          src={Adam1}
          alt="Adam Boruta MMstal"
          className="employee__img employee__img--second"
        />
        <div className="employee__desc--container">
          <h4 className="employee__name">
            Adam <span className="employee__surname">Boruta</span>
          </h4>
          <p className="employee__exp">6 lat doświadczenia</p>
          <p className="employee__desc">
            Monter konstrukcji stalowych oraz pomocnik spawacza. Swoją przygodę
            z metaloplastyka rozpoczął w trybie pracy sezonowej, jako pomocnik
            spawacza oraz pomocnik przy montażu konstrukcji. W miarę upływu
            czasu i nabieranego doświadczenia praca dorywcza stała się jego
            pomysłem na życie. W naszej firmie zajmuje się obróbką materiału
            poczynając od przygotowania i pocięcia materiału pod wymiar do
            finalnego oczyszczenia, szlifowania i wykończenia po montaż
            wykonanych konstrukcji.
          </p>
        </div>
      </div>
    </>
  );
};

export default Employers;
