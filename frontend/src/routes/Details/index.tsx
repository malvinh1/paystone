import sanitizeHtml from '@wpe-tkpd/xss/dist/sanitizeHtml/sanitizeHtmlBrowser';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';

import { numberToCurrency } from '../../helpers/numberFormatter';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import { useFetchCryptoDetail } from '../../hooks/useFetchCryptoDetail';
import useFetchCryptoHistory from '../../hooks/useFetchCryptoHistory';

const TIMEFRAMES = [
  {
    label: '24 Hours',
    key: '1',
  },
  {
    label: '30 Days',
    key: '30',
  },
  {
    label: '3 Months',
    key: '90',
  },
  {
    label: '1 Year',
    key: '365',
  },
];

const Details = () => {
  const params = useParams();

  const [timeframe, setTimeframe] = useState('1');

  const { data } = useFetchCryptoDetail(params.id);
  const { data: historicData } = useFetchCryptoHistory(params.id, timeframe);

  const handleSetTimeframe = (value: string) => {
    setTimeframe(value);
  };

  return (
    <div className="flex h-screen flex-col xl:flex-row">
      <div className="border:none flex w-full flex-col border-gray-900 p-4 xl:w-3/5 xl:border-r-2">
        <img
          className="h-[200px] w-[200px] self-center"
          alt="crypto-logo"
          src={data?.image.large}
        />
        <h1 className="my-2 self-center text-4xl font-bold">{data?.name}</h1>
        {data?.description.en &&
          data.description.en.split('. ').map((item, index) => {
            if (index < 3) {
              return (
                <div
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(item),
                  }}
                  key={index}
                  className="my-2 text-justify font-mono"
                />
              );
            }
          })}
        <h2 className="my-2 self-center text-2xl font-bold xl:self-start">
          Rank: {data?.market_cap_rank || 'N.A'}
        </h2>
        <h2 className="my-2 self-center text-2xl font-bold xl:self-start">
          Current Price:{' '}
          {numberToCurrency({
            num: data?.market_data.current_price.usd || 0,
          })}
        </h2>
        <h2 className="my-2 self-center text-2xl font-bold xl:self-start">
          Market Cap:{' '}
          {numberToCurrency({
            num: data?.market_data.market_cap.usd || 0,
          })}
        </h2>
      </div>
      <div className="w-full p-4">
        <Line
          data={{
            labels: historicData?.prices.map((coin) => {
              let date = new Date(coin[0]);
              let time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;
              return timeframe === '1' ? time : date.toLocaleDateString();
            }),

            datasets: [
              {
                data: historicData?.prices.map((coin) => coin[1]),
                label: `Price ( Past ${timeframe} Days ) in usd`,
                borderColor: '#EEBC1D',
              },
            ],
          }}
          options={{
            elements: {
              point: {
                radius: 1,
              },
            },
          }}
        />
        <div className="mt-2 flex">
          {TIMEFRAMES.map((item, index) => (
            <div
              key={index}
              className="mr-2 flex flex-1 cursor-pointer items-center justify-center rounded-md bg-primary p-3 text-center font-bold"
              onClick={() => handleSetTimeframe(item.key)}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
