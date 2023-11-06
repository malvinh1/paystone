import { fireEvent } from '@testing-library/react';

import renderRoute from '../../../helpers/renderRoute';
import NotFound from '../';

it('should render not found route correctly', () => {
  const { getByText, getByTestId } = renderRoute(<NotFound />);

  expect(getByText('Route not found')).toBeDefined();

  fireEvent.click(getByTestId('back-to-home'));
});
