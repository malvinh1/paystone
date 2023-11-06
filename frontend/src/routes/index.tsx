import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Crypto from './Crypto';
import Details from './Details';
import Home from './Home';
import NotFound from './NotFound';

const RootRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/coins/:id" element={<Details />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoutes;
