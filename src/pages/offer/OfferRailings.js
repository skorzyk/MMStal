import { useState } from 'react';
import '../../styles/offer/OfferRailings.css';
import OfferRailingsInside from './OfferRailingsInside';
import OfferRailingsOutside from './OfferRailingsOutside';

const OfferRailings = () => {
  const [activeTab, setActiveTab] = useState(0);
  const selectTabOutsideHandler = () => {
    setActiveTab(0);
  };
  const selectTabInsideHandler = () => {
    setActiveTab(1);
  };
  let selectedTab = <OfferRailingsOutside />;
  if (activeTab === 1) {
    selectedTab = <OfferRailingsInside />;
  }

  return (
    <>
      <div className='offer-railings'>
        <h4>
          <span className='offer-railings__breadcrums-title'>Oferta </span>
          <span className='offer-railings__breadcrums-subtitle'>
            / Balustrady
          </span>
        </h4>

        <div className='offer-railings__tab-wrapper'>
          <div
            className={`offer-railings__tab ${activeTab === 0 && 'active-tab'}`}
            onClick={selectTabOutsideHandler}
          >
            Zewnętrzne
          </div>
          <div
            className={`offer-railings__tab ${activeTab === 1 && 'active-tab'}`}
            onClick={selectTabInsideHandler}
          >
            Wewnętrzne
          </div>
        </div>
        {selectedTab}
      </div>
    </>
  );
};
export default OfferRailings;