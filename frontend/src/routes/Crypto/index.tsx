import React from 'react';
import { Suspense, useState } from 'react';

import Pagination from '../../components/Pagination';
import {
  BannerSkeleton,
  SearchbarSekelton,
  TableSkeleton,
} from '../../components/Skeleton';
import useFetchCryptoList, {
  CryptoCurrencyAsset,
} from '../../hooks/useFetchCryptoList';

const Table = React.lazy(() => import('../../components/Table'));
const Banner = React.lazy(() => import('./components/Banner'));
const Searchbar = React.lazy(() => import('../../components/Searchbar'));

const Crypto = () => {
  const { data } = useFetchCryptoList();

  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);

  const filteredData = (data?: CryptoCurrencyAsset[]) => {
    return data?.filter(
      (item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.symbol.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  const handleSetSearchValue = (value: string) => {
    setSearchValue(value);
    setPage(1);
  };

  return (
    <div className="h-full p-4">
      <Suspense fallback={<BannerSkeleton />}>
        <Banner />
      </Suspense>
      <Suspense fallback={<SearchbarSekelton />}>
        <Searchbar value={searchValue} onChangeValue={handleSetSearchValue} />
      </Suspense>
      <Suspense fallback={<TableSkeleton />}>
        <Table data={filteredData(data)} page={page} />
      </Suspense>
      <Pagination
        page={page}
        totalData={filteredData(data)?.length || 0}
        totalPage={Math.ceil((filteredData(data)?.length || 20) / 20)}
        onChangePage={(page) => setPage(page)}
      />
    </div>
  );
};

export default Crypto;
