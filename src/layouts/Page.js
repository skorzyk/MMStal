import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import OfferItems from '../pages/OfferItems';
import OwnOffer from '../pages/OwnOffer';
import Employers from '../pages/Employers';
import Realization from '../pages/Realization';
import ContactPage from '../pages/Contact-Page';
import OfferFences from '../pages/offer/OfferFences';
import OfferConstructions from '../pages/offer/OfferConstructions';
import OfferFurtniture from '../pages/offer/OfferFurniture';
import OfferRailings from '../pages/offer/OfferRailings';
import OfferStairs from '../pages/offer/OfferStairs';
import OfferRailingsInside from '../pages/offer/OfferRailingsInside';
import OfferRailingsOutside from '../pages/offer/OfferRailingsOutside';

const Page = () => {
  return (
    <>
      <Routes>
        <Route path='/' end element={<Main />} />
        <Route path='/oferta/*' end element={<OfferItems />} />
        <Route path='/oferta/ogrodzenia' end element={<OfferFences />} />
        <Route
          path='/oferta/konstrukcje'
          end
          element={<OfferConstructions />}
        />
        <Route path='/oferta/meble' end element={<OfferFurtniture />} />
        <Route path='/oferta/balustrady/*' end element={<OfferRailings />} />
        <Route
          path='/oferta/balustrady/zewnetrzne'
          end
          element={<OfferRailingsOutside />}
        />
        <Route
          path='/oferta/balustrady/wewnetrzne'
          end
          element={<OfferRailingsInside />}
        />
        <Route path='/oferta/schody' end element={<OfferStairs />} />
        <Route path='/projekt' end element={<OwnOffer />} />
        <Route path='/realizacje' end element={<Realization />} />
        <Route path='/o-nas' end element={<Employers />} />
        <Route path='/kontakt' end element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default Page;
