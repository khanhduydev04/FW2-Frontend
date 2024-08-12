import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/common";

const ProductCard = ({ product }) => {
  return (
    <Link className="" to={`/san-pham/${product._id}`}>
      <div className="h-full overflow-hidden rounded-lg border bg-white pb-[1px] shadow-sm flex flex-col">
        <div className="size-full max-h-[185px]">
          <img
            className="max-h-[100%] max-w-[100%] object-contain"
            src={product.images[0].url}
            alt={product.name}
            loading="lazy"
            width="500"
            height="500"
          />
          <div className="absolute bottom-0 left-0 flex h-[26px] w-full"></div>
        </div>
        <div className="p-2 pb-1 font-medium flex-1 flex flex-col justify-between">
          <div className="">
            <h3 className="line-clamp-2 h-10 text-sm font-semibold">
              {product.name}
            </h3>
          </div>
          <div className="my-1 items-center whitespace-nowrap">
            {product.discount > 0 && (
              <del className="block h-5 text-sm font-semibold text-neutral-600">
                {formatCurrency(product.price)}
              </del>
            )}
            <span className="mt-[2px] block h-6 text-base font-bold text-green-600">
              {formatCurrency(
                Number(product.price) * (1 - Number(product.discount))
              )}
            </span>
            <div className="mb-2 flex items-center py-1 text-sm">
              <span className="p-icon inline-flex h-4 max-h-full w-4 max-w-full items-center align-[-0.125em] text-neutral-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  fill="none"
                  viewBox="0 0 25 24"
                >
                  <path
                    fill="currentColor"
                    d="M17.22 2a6.2 6.2 0 0 0-4.72 2.16A6.2 6.2 0 0 0 7.78 2a6.26 6.26 0 0 0-4.55 10.58l8.55 8.9a1 1 0 0 0 1.44 0l8.55-8.9h.01A6.26 6.26 0 0 0 17.22 2Z"
                  ></path>
                </svg>
              </span>
              <span className="text-[12px] sm:text-[14px] leading-[20px] mx-1 font-medium">
                20.3k
              </span>
              <span className="text-neutral-600">|</span>
              <span className="text-[12px] sm:text-[14px] leading-[20px] mx-1 font-medium">
                Đã bán 6.6k
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
