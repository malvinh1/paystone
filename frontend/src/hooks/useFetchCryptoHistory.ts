import { useQuery } from 'react-query';

export type CryptoHistoricalDetail = {
  prices: Array<number[]>;
  market_caps: Array<number[]>;
  total_volumes: Array<number[]>;
};

const useFetchCryptoHistory = (id?: string, days?: string) => {
  const result = useQuery<CryptoHistoricalDetail>(
    'crypto-history',
    async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_COINGECKO}coins/${id}/market_chart?vs_currency=usd&days=${days}`
      );
      return response.json();
    }
  );

  return result;
};

export default useFetchCryptoHistory;
