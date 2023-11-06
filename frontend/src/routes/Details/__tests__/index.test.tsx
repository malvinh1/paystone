import { fireEvent } from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';

import renderRoute from '../../../helpers/renderRoute';
import Details from '../';

jest.mock('react-chartjs-2', () => ({
  Line: () => null,
}));

jest.mock('../../../hooks/useFetchCryptoDetail.ts', () => ({
  useFetchCryptoDetail: () => ({
    data: {
      id: 'bitcoin',
      name: 'Bitcoin',
      image: {
        thumb:
          'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579',
        small:
          'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579',
        large:
          'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
      },
      description: {
        en: 'Bitcoin is the first successful internet money based on peer-to-peer technology',
      },
      market_data: {
        current_price: {
          usd: '39452',
        },
        market_cap: {
          usd: 720869031504,
        },
      },
    },
  }),
}));

it('should render not found route correctly', async () => {
  const { container, getByText } = renderRoute(
    <Routes>
      <Route path="/coins/:id" element={<Details />} />
    </Routes>,
    {
      history: ['/coins/bitcoin'],
    }
  );

  fireEvent.click(getByText('24 Hours'));

  expect(container).toBeDefined();
});
