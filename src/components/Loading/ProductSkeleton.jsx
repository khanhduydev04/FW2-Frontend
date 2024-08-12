const ProductSkeleton = () => {
  return (
    <div className="h-[330px] overflow-hidden rounded-lg border bg-white pb-[1px] shadow-sm flex flex-col animate-pulse">
      <div className="size-full max-h-[185px] bg-gray-200">
        <div className="w-full h-full bg-gray-300"></div>
        <div className="absolute bottom-0 left-0 flex h-[26px] w-full bg-gray-200"></div>
      </div>
      <div className="p-2 pb-1 font-medium flex-1 flex flex-col justify-between">
        <div className="h-10 bg-gray-200 mb-2">
          <div className="w-full h-full bg-gray-300"></div>
        </div>
        <div className="my-1 items-center whitespace-nowrap">
          <div className="h-5 bg-gray-200 mb-2">
            <div className="w-full h-full bg-gray-300"></div>
          </div>
          <div className="w-1/2 h-6 bg-gray-200">
            <div className="w-full h-full bg-gray-300"></div>
          </div>
          <div className="mb-2 flex items-center py-1 text-sm">
            <div className="p-icon inline-flex h-4 max-h-full w-4 max-w-full bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                fill="none"
                viewBox="0 0 25 24"
                className="bg-gray-300"
              >
                <path
                  fill="currentColor"
                  d="M17.22 2a6.2 6.2 0 0 0-4.72 2.16A6.2 6.2 0 0 0 7.78 2a6.26 6.26 0 0 0-4.55 10.58l8.55 8.9a1 1 0 0 0 1.44 0l8.55-8.9h.01A6.26 6.26 0 0 0 17.22 2Z"
                ></path>
              </svg>
            </div>
            <div className="h-4 w-12 bg-gray-200 mx-1">
              <div className="w-full h-full bg-gray-300"></div>
            </div>
            <span className="text-neutral-600">|</span>
            <div className="h-4 w-16 bg-gray-200 mx-1">
              <div className="w-full h-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
