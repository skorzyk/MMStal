import { useState } from 'react';
import './Tabs.css';

const Tabs = ({
  tabs,
  defaultActiveIndex = 0,
  headerClassName = '',
  tabClassName = '',
  activeTabClassName = 'active-tab',
  contentClassName = '',
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveIndex);

  return (
    <div className={`tabs ${headerClassName}`}>
      <div className='tabs__header'>
        {tabs.map((tab, index) => (
          <div
            key={tab.label}
            className={`tabs__tab ${tabClassName} ${
              activeTab === index ? activeTabClassName : ''
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className={`tabs__content ${contentClassName}`}>
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
