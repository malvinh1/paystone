import { useState } from 'react';

const MOCK_TAGS = [
  'All',
  'Metaverse',
  'Gaming',
  'DeFi',
  'Innovation',
  'Layer 1 / Layer 2',
  'Fan Token',
  'Storage',
  'Polkadot',
  'POS',
  'POW',
  'Launchpad',
  'Launchpool',
  'BSC',
  'ETF',
];

const ScrollingTags = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative box-border flex items-center justify-between overflow-auto whitespace-nowrap pb-4 hover:overflow-scroll">
      {MOCK_TAGS.map((value, index) => (
        <div key={index}>
          {activeIndex === index ? (
            <div
              className="mr-2 cursor-pointer rounded-lg bg-gray-400 py-1 px-2"
              onClick={() => setActiveIndex(index)}
            >
              {value}
            </div>
          ) : (
            <div
              className="mr-2 cursor-pointer py-1 px-2 text-gray-500"
              onClick={() => setActiveIndex(index)}
            >
              {value}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ScrollingTags;
