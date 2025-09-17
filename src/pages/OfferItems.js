import '../styles/OfferItems.css';

import balustradyImg from '../images/wlasne/balustrady6_wlasne.jpg';
import ogrodzeniaPodWymiarImg from '../images/wlasne/brama2_wlasne.jpg';
import schodyImg from '../images/wlasne/balustrady_wew_wlasne-crop.jpg';
import konstrukcjeStaloweImg from '../images/konstrukcje stalowe.jpg';
import mebleLoftoweImg from '../images/komoda loftowa.png';
import { NavLink } from 'react-router-dom';

const OfferItems = () => {
  return (
    <>
      <section className='offer'>
        <h3 className='offer__title' data-aos={'fade-up'}>
          Oferta
        </h3>
        <NavLink
          to='/oferta/ogrodzenia'
          end
          className='offer__item'
          data-aos={'fade-up'}
        >
          <img
            src={ogrodzeniaPodWymiarImg}
            alt='Ogrodzenia pod wymiar'
            className='offer__img'
          />
          <h4 className='offer__desc'>Ogrodzenia pod wymiar</h4>
        </NavLink>

        <NavLink
          to='/oferta/balustrady'
          end
          className='offer__item'
          data-aos={'fade-up'}
        >
          <img src={balustradyImg} alt='Balustrady' className='offer__img' />
          <h4 className='offer__desc'>Balustrady</h4>
        </NavLink>
        <NavLink
          to='/oferta/schody'
          end
          className='offer__item'
          data-aos={'fade-up'}
        >
          <img src={schodyImg} alt='Schody' className='offer__img' />
          <h4 className='offer__desc'>Schody</h4>
        </NavLink>
        <NavLink
          to='/oferta/konstrukcje'
          end
          className='offer__item'
          data-aos={'fade-up'}
        >
          <img
            src={konstrukcjeStaloweImg}
            alt='Konstrukcje stalowe'
            className='offer__img'
          />
          <h4 className='offer__desc'>Konstrukcje stalowe</h4>
        </NavLink>
        <NavLink
          to='/oferta/meble'
          end
          className='offer__item'
          data-aos={'fade-up'}
        >
          <img
            src={mebleLoftoweImg}
            alt='Meble loftowe'
            className='offer__img'
          />
          <h4 className='offer__desc'>Meble loftowe</h4>
        </NavLink>
      </section>
    </>
  );
};

export default OfferItems;
