import { useQuery } from 'react-query';

export type CryptoDetail = {
  id: string;
  symbol: string;
  name: string;
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  market_cap_rank: number;
  description: {
    en: string;
  };
  market_data: {
    current_price: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
  };
};

const useFetchCryptoDetail = (id?: string) => {
  const result = useQuery<CryptoDetail>(`crypto-${id}`, async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_COINGECKO}coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
    );
    return response.json();
  });

  return result;
};

export { useFetchCryptoDetail };
