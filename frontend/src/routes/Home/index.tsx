import VitalikPhoto from '../../assets/vitalik.png';

const Home = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center p-4">
      <h1 className="text-3xl lg:text-6xl">Welcome to the Home Screen</h1>
      <img className="mt-5 h-80 w-96" alt="vitalik" src={VitalikPhoto} />
    </div>
  );
};

export default Home;
