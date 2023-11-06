import { ChevronLeftIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';

import VitalikPhoto from '../../assets/vitalik.png';

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="flex h-full flex-1 flex-col items-center pt-10">
      <h1 className="text-6xl font-bold">Route not found</h1>
      <img className="mt-5 h-80 w-96" alt="vitalik" src={VitalikPhoto} />
      <div
        data-testid="back-to-home"
        className="mt-5 flex cursor-pointer items-center rounded-md bg-primary p-4"
        onClick={handleBackToHome}
      >
        <ChevronLeftIcon className="h-5 w-5" />
        <h1 className="font-bold">Go to Home</h1>
      </div>
    </div>
  );
};

export default NotFound;
