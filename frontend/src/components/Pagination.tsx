import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

type Props = {
  page: number;
  totalData: number;
  totalPage: number;
  onChangePage: (page: number) => void;
};

const Pagination = ({ page, totalData, totalPage, onChangePage }: Props) => {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between md:hidden">
        <div
          className="relative inline-flex cursor-pointer items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          onClick={() => {
            if (page !== 1) {
              onChangePage(page - 1);
            }
          }}
        >
          Previous
        </div>
        <div
          className="relative ml-3 inline-flex cursor-pointer items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          onClick={() => {
            if (page !== totalPage) {
              onChangePage(page + 1);
            }
          }}
        >
          Next
        </div>
      </div>
      <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{totalData}</span> results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <div
              className="relative inline-flex cursor-pointer items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
              onClick={() => {
                if (page !== 1) {
                  onChangePage(page - 1);
                }
              }}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </div>
            {totalPage > 0 &&
              new Array(totalPage).fill(0).map((_, index) => {
                return (
                  <div
                    key={index}
                    aria-current="page"
                    className="relative z-10 inline-flex cursor-pointer items-center border border-gray-300 px-4 py-2 text-sm font-medium text-indigo-600"
                    style={{
                      backgroundColor:
                        page === index + 1 ? 'lightGray' : 'white',
                    }}
                    onClick={() => onChangePage(index + 1)}
                  >
                    {index + 1}
                  </div>
                );
              })}
            <div
              className="relative inline-flex cursor-pointer items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
              onClick={() => {
                if (page !== totalPage) {
                  onChangePage(page + 1);
                }
              }}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
