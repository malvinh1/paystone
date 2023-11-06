import { render } from '@testing-library/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';

const queryClient = new QueryClient();

const setWrapper = (component: React.ReactNode, { history = ['/'] } = {}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={history}>{component}</MemoryRouter>
    </QueryClientProvider>
  );
};

const renderRoute = (ui: React.ReactNode, props?: { history: Array<string> }) =>
  render(setWrapper(ui, props));

export default renderRoute;
