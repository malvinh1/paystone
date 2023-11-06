import SearchIcon from '../assets/search-icon.svg';

type Props = {
  value: string;
  onChangeValue: (e: string) => void;
};

const Searchbar = ({ value, onChangeValue }: Props) => {
  return (
    <div className="my-4 flex w-fit rounded-md border p-2 hover:border-primary">
      <img src={SearchIcon} width={24} alt="search-icon" />
      <input
        className="ml-2 outline-none md:w-64"
        defaultValue={value}
        placeholder="Search Coin Name"
        onChange={(e) => onChangeValue(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
