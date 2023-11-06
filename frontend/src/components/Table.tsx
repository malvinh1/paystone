import { useNavigate } from 'react-router-dom';

import { numberToCurrency } from '../helpers/numberFormatter';
import { CryptoCurrencyAsset } from '../hooks/useFetchCryptoList';

type Props = {
  data?: CryptoCurrencyAsset[];
  page: number;
};

const Table = ({ data, page }: Props) => {
  const navigate = useNavigate();

  const handleGoToDetailPage = (id: string) => {
    navigate(`/coins/${id}`);
  };

  return (
    <div>
      <div className="hidden flex-row bg-gray-100 py-2 pl-3 text-xs text-gray-700 md:flex">
        <div className="flex w-[220px] flex-grow">Name</div>
        <div className="flex w-[100px] flex-grow">Price</div>
        <div className="flex w-[100px] flex-grow justify-end text-right">
          24h Change
        </div>
        <div className="flex w-[130px] flex-grow justify-end text-right">
          24h Volume
        </div>
        <div className="flex w-[130px] flex-grow justify-end text-right">
          Market Cap
        </div>
        <div className="flex w-[180px] flex-grow overflow-hidden" />
      </div>
      {data?.slice((page - 1) * 20, (page - 1) * 20 + 20).map((item) => (
        <div
          className="text-md flex flex-col border-b-2 py-4 pl-3 md:flex-row md:items-center"
          key={item.id}
        >
          <div
            className="flex w-[220px] flex-grow cursor-pointer flex-row flex-wrap items-center"
            onClick={() => handleGoToDetailPage(item.id)}
          >
            <img
              alt="coin-logo"
              src={item.image}
              className="h-[24px]"
              height={24}
            />
            <h3 className="px-2 font-semibold">{item.symbol.toUpperCase()}</h3>
            <h4 className="text-xs text-gray-500">{item.name}</h4>
          </div>
          <div className="flex flex-grow justify-between md:w-[100px]">
            <div className="block text-gray-700 md:hidden">Last Price</div>
            <div>
              {numberToCurrency({
                num: item.current_price,
                maximumFractionDigits: 5,
              })}
            </div>
          </div>
          <div
            className="flex flex-grow justify-between text-right md:w-[100px] md:justify-end"
            style={{
              color:
                item.price_change_percentage_24h > 0
                  ? 'rgb(14, 203, 129)'
                  : 'red',
            }}
          >
            <div className="block text-gray-700 md:hidden">24h Change</div>
            <div className="font-semibold">
              {item.price_change_percentage_24h.toFixed(2) + '%'}
            </div>
          </div>
          <div className="flex flex-grow justify-between text-right md:w-[130px] md:justify-end">
            <div className="block text-gray-700 md:hidden">24h Volume</div>
            <div>
              {numberToCurrency({
                num: item.total_volume,
              })}
            </div>
          </div>
          <div className="flex flex-grow justify-between text-right md:w-[130px] md:justify-end">
            <div className="block text-gray-700 md:hidden">Market Cap</div>
            <div>
              {numberToCurrency({
                num: item.market_cap,
              })}
            </div>
          </div>
          <div
            className="flex w-[180px] flex-grow cursor-pointer text-right text-primary md:justify-center"
            onClick={() => handleGoToDetailPage(item.id)}
          >
            Detail
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
