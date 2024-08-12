import { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard";
import { getProducts } from "../../../services/product";
import { ProductSkeleton } from "../../../components/Loading";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = async () => {
    const res = await getProducts(1, 12);

    if (res) {
      setIsLoading(false);
      setProducts(res.data.data.products);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <div className="bg-neutral-100">
        <div className="container mx-auto px-3 py-1">
          <ul className="flex items-center py-1.5 text-neutral-600">
            <li className="h-5 text-sm">
              <span className="hover:text-neutral-800 mx-1 font-normal text-[12px] leading-5">
                <a href="/">Trang chủ</a>
              </span>
              <span className="">{">"}</span>
            </li>
            <li className="h-5 text-sm">
              <a
                href=""
                className="hover:text-neutral-800 mx-1 font-normal text-[12px] leading-5 text-neutral-900"
              >
                Thuốc
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto p-3">
        <h1 className="text-2xl font-medium">Thuốc</h1>
        <div className="grid grid-cols-8 mt-5 items-start gap-5">
          <a
            href=""
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="bg-green-50 overflow-hidden size-30 rounded-full border border-green-100">
              <img
                className="w-full h-fullobject-cover"
                src="https://prod-cdn.pharmacity.io/e-com/images/ecommerce/300x300/20240223191727-0-P00126_5.png"
                alt="P00126_5.png"
                loading="lazy"
              />
            </div>
            <p
              title="Thuốc không kê đơn"
              className="line-clamp-3 text-center text-sm font-medium text-neutral-900 md:line-clamp-2 md:text-base"
            >
              Thuốc không kê đơn
            </p>
          </a>
          <a
            href=""
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="bg-green-50 overflow-hidden size-30 rounded-full border border-green-100">
              <img
                className="w-full h-fullobject-cover"
                src="https://prod-cdn.pharmacity.io/e-com/images/ecommerce/300x300/20240223191446-0-P00218_1_l.png"
                alt="P00126_5.png"
                loading="lazy"
              />
            </div>
            <p
              title="Thuốc không kê đơn"
              className="line-clamp-3 text-center text-sm font-medium text-neutral-900 md:line-clamp-2 md:text-base"
            >
              Thuốc kê đơn
            </p>
          </a>
        </div>
      </div>
      <div className="bg-neutral-100 h-3"></div>
      <div className="container relative grid grid-cols-1 md:grid-cols-5 mx-auto items-start gap-3">
        <div className="col-span-1 pt-4 sticky top-0">
          <form>
            <div className="flex items-center justify-between py-4 px-3">
              <p className="text-normal font-semibold text-neutral-900">
                Bộ lọc
              </p>
              <button
                className="relative justify-center border-0 bg-transparent text-sm font-normal text-green-500 outline-none md:hover:text-primary-600 md:text-base inline"
                type="reset"
              >
                Thiết lập lại
              </button>
            </div>
            <div className="bg-neutral-100 me-2 hidden h-[1px] md:block"></div>
            <div className="h-full px-3">
              <div className="grid py-3 gap-4">
                <div className="grid gap-3">
                  <div className="font-semibold">Khoảng giá</div>
                  <div className="grid gap-4">
                    <div className="relative flex">
                      <input
                        type="number"
                        className="w-full border border-neutral-500 outline-none focus:border-green-500 rounded-md p-2"
                        placeholder="Tối thiểu"
                        inputMode="numeric"
                      />
                      <span className="absolute right-0 flex h-full items-center px-3">
                        <span className="text-base font-normal text-neutral-500 md:text-sm">
                          ₫
                        </span>
                      </span>
                    </div>
                    <div className="relative flex">
                      <input
                        type="number"
                        className="w-full border border-neutral-500 outline-none focus:border-green-500 rounded-md p-2"
                        placeholder="Tối đa"
                        inputMode="numeric"
                      />
                      <span className="absolute right-0 flex h-full items-center px-3">
                        <span className="text-base font-normal text-neutral-500 md:text-sm">
                          ₫
                        </span>
                      </span>
                    </div>
                  </div>
                  <button className="bg-green-600 hover:bg-green-500 py-2 rounded-md w-full text-white font-medium">
                    Áp dụng
                  </button>
                  <div className="grid gap-2">
                    <label
                      htmlFor="range1"
                      className="group flex items-center cursor-pointer gap-3"
                    >
                      <input
                        type="radio"
                        name="range"
                        id="range1"
                        value={100000}
                      />
                      <span className="truncate">Dưới 100.000&nbsp;₫</span>
                    </label>
                    <label
                      htmlFor="range2"
                      className="group flex items-center cursor-pointer gap-3"
                    >
                      <input
                        type="radio"
                        name="range"
                        id="range2"
                        value={100000 - 300000}
                      />
                      <span className="truncate">
                        100.000&nbsp;₫ - 300.000&nbsp;₫
                      </span>
                    </label>
                    <label
                      htmlFor="range3"
                      className="group flex items-center cursor-pointer gap-3"
                    >
                      <input
                        type="radio"
                        name="range"
                        id="range3"
                        value={300000 - 500000}
                      />
                      <span className="truncate">
                        300.000&nbsp;₫ - 500.000&nbsp;₫
                      </span>
                    </label>
                    <label
                      htmlFor="range4"
                      className="group flex items-center cursor-pointer gap-3"
                    >
                      <input
                        type="radio"
                        name="range"
                        id="range4"
                        value={500000}
                      />
                      <span className="truncate">Trên 500.000&nbsp;₫</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-span-4 pt-4">
          <div className="flex items-center gap-3 py-2 sticky top-0 bg-white">
            <div className="hidden text-sm font-medium text-neutral-900 md:block">
              Sắp xếp theo:{" "}
            </div>
            <button className="border border-neutral-500 px-4 py-2 rounded-md text-neutral-500 text-sm font-medium">
              Giá giảm dần
            </button>
            <button className="border border-neutral-500 px-4 py-2 rounded-md text-neutral-500 text-sm font-medium">
              Giá tăng dần
            </button>
          </div>
          <div className="grid grid-col-2 md:grid-cols-4 gap-3">
            {isLoading
              ? Array.from({ length: 12 }).map((_, index) => (
                  <ProductSkeleton key={index} />
                ))
              : products.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
