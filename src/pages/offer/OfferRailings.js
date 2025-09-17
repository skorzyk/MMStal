import '../../styles/offer/OfferRailings.css';
import OfferRailingsInside from './OfferRailingsInside';
import OfferRailingsOutside from './OfferRailingsOutside';
import Tabs from '../../components/Tabs/Tabs';
import BackButton from '../../components/BackButton/BackButton';

const OfferRailings = () => {
  const tabsConfig = [
    {
      label: 'Zewnętrzne',
      content: <OfferRailingsOutside />,
    },
    {
      label: 'Wewnętrzne',
      content: <OfferRailingsInside />,
    },
  ];

  return (
    <>
      <div className='offer-railings'>
        <BackButton />
        <h4>
          <span className='offer-railings__breadcrums-title'>Oferta </span>
          <span className='offer-railings__breadcrums-subtitle'>
            / Balustrady
          </span>
        </h4>

        <Tabs
          tabs={tabsConfig}
          activeTabClassName='active-tab'
          headerClassName='offer-railings__tab-wrapper'
          tabClassName='offer-railings__tab'
        />
      </div>
    </>
  );
};
export default OfferRailings;
