const BannerSkeleton = () => (
  <div className="h-[191px] w-full animate-pulse rounded-md bg-gray-300" />
);

const HeaderSkeleton = () => (
  <div className="h-[58px] w-full animate-pulse bg-gray-300" />
);

const SearchbarSekelton = () => (
  <div className="my-4 h-[42px] w-[227px] animate-pulse bg-gray-300" />
);

const TableSkeleton = () => (
  <div className="h-2/5 w-full animate-pulse rounded-md bg-gray-300" />
);

export { BannerSkeleton, HeaderSkeleton, SearchbarSekelton, TableSkeleton };
