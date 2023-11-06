import { useNavigate } from 'react-router-dom';

import BinanceLogo from '../assets/binance.svg';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer border-b-2 bg-gray-600 p-4"
      onClick={() => navigate('/')}
    >
      <img src={BinanceLogo} width={120} height={24} alt="logo" />
    </div>
  );
};

export default Header;
