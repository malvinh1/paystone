import 'react-alice-carousel/lib/alice-carousel.css';

import AliceCarousel from 'react-alice-carousel';
import { useNavigate } from 'react-router-dom';

import { numberToCurrency } from '../../../helpers/numberFormatter';
import useFetchTrendingCryptoList from '../../../hooks/useFetchTrendingCrypto';

const Banner = () => {
  const navigate = useNavigate();

  const { data: trending } = useFetchTrendingCryptoList();

  const handleGoToDetailPage = (id: string) => {
    navigate(`/coins/${id}`);
  };

  const items = trending?.map((coin) => {
    const profit = coin?.price_change_percentage_24h >= 0;

    return (
      <div
        className="flex cursor-pointer flex-col items-center uppercase"
        onClick={() => handleGoToDetailPage(coin.id)}
      >
        <img
          className="mb-[10px] h-[80px]"
          src={coin?.image}
          alt={coin.name}
          height={80}
        />
        <span>
          {coin?.symbol}
          &nbsp;
          <span
            className="font-medium"
            style={{
              color: profit ? 'rgb(14, 203, 129)' : 'red',
            }}
          >
            {profit && '+'}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <span style={{ fontSize: 22, fontWeight: 500 }}>
          {numberToCurrency({
            num: coin.current_price,
          })}
        </span>
      </div>
    );
  });

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Crypto Market Overview</h1>
      <AliceCarousel
        mouseTracking
        infinite
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={{
          0: {
            items: 2,
          },
          568: {
            items: 4,
          },
        }}
        items={items}
      />
    </div>
  );
};

export default Banner;
