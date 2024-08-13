import {useEffect, useState} from "react";
import ProductCard from "../../../components/ProductCard";
import {getProducts} from "../../../services/product";
import {ProductSkeleton} from "../../../components/Loading";
import {getCategories} from "../../../services/category";
import {Link, useSearchParams} from "react-router-dom";

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const fetchProducts = async () => {
        const res = await getProducts(page);

        if (res) {
            setIsLoading(false);
            setProducts(res.data.data.products);
            setTotalPages(res.data.data.totalPages);
        }
    };
    const fetchCategories = async () => {
        const res = await getCategories();

        if (res) {
            setIsLoading(false);
            setCategories(res.data);
        }
    };
    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };
    const handlePageClick = (page) => {
        setPage(page);
    };
    const sort = (type) => {
        let sortedProducts;
        switch (type) {
            case "asc":
                sortedProducts = [...products].sort((a, b) => a.price - b.price);
                break;
            case "desc":
                sortedProducts = [...products].sort((a, b) => b.price - a.price);
                break;
            default:
                sortedProducts = [...products].sort((a, b) => a.id - b.id);
        }
        setProducts(sortedProducts);
    };

    const filterProducts = () => {
        return products.filter((product) => {
            const price = product.price;
            const min = minPrice ? parseFloat(minPrice) : 0;
            const max = maxPrice ? parseFloat(maxPrice) : Infinity;
            const categoryMatch = selectedCategory ? product.category === selectedCategory : true;
            return price >= min && price <= max && categoryMatch;
        });
    };

    useEffect(() => {
        fetchCategories();
        fetchProducts();
    }, [page]);

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
                    {categories.map((item, index) => (
                        <Link
                            to={`?category=${item._id}`}
                            onClick={() => setSelectedCategory(selectedCategory === item._id ? null : item._id)}
                        >
                            <div
                                className={`relative flex flex-col items-center justify-center text-center ${
                                    index % 2 === 0 ? "bg-white" : "bg-neutral-100"
                                }`}
                            >
                                <div className="w-[100px] h-[100px] overflow-hidden rounded-full border border-gray-200">
                                    <img className="w-full h-full object-cover" src={item.image} alt={item.name} />
                                </div>
                                <p className="text-sm font-medium text-neutral-900 md:text-base">{item.name}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="bg-neutral-100 h-3"></div>
            <div className="container relative grid grid-cols-1 md:grid-cols-5 mx-auto items-start gap-3">
                <div className="col-span-1 pt-4 sticky top-0">
                    <div>
                        <div className="flex items-center justify-between py-4 px-3">
                            <p className="text-normal font-semibold text-neutral-900">Bộ lọc</p>
                            <button
                                className="relative justify-center border-0 bg-transparent text-sm font-normal text-green-500 outline-none md:hover:text-primary-600 md:text-base inline"
                                type="reset"
                                onClick={() => {
                                    setMinPrice("");
                                    setMaxPrice("");
                                    setSelectedCategory(null);
                                }}
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
                                                value={minPrice}
                                                onChange={(e) => setMinPrice(e.target.value)}
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
                                                value={maxPrice}
                                                onChange={(e) => setMaxPrice(e.target.value)}
                                            />
                                            <span className="absolute right-0 flex h-full items-center px-3">
                                                <span className="text-base font-normal text-neutral-500 md:text-sm">
                                                    ₫
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <button
                                        className="bg-green-600 hover:bg-green-500 py-2 rounded-md w-full text-white font-medium"
                                        onClick={filterProducts}
                                    >
                                        Áp dụng
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 pt-4">
                    <div className="flex items-center gap-3 py-2 sticky top-0 bg-white">
                        <div className="hidden text-sm font-medium text-neutral-900 md:block">Sắp xếp theo: </div>
                        <button
                            onClick={() => sort("desc")}
                            className="border border-neutral-500 px-4 py-2 rounded-md text-neutral-500 text-sm font-medium"
                        >
                            Giá giảm dần
                        </button>
                        <button
                            onClick={() => sort("asc")}
                            className="border border-neutral-500 px-4 py-2 rounded-md text-neutral-500 text-sm font-medium"
                        >
                            Giá tăng dần
                        </button>
                    </div>
                    {products.length > 0 && (
                        <div className="">
                            <div className="grid grid-col-2 md:grid-cols-4 gap-3">
                                {isLoading
                                    ? Array.from({length: 12}).map((_, index) => <ProductSkeleton key={index} />)
                                    : filterProducts().map((product, index) => (
                                          <ProductCard key={index} product={product} />
                                      ))}
                            </div>
                            <div className="mt-4 flex justify-center">
                                <button
                                    onClick={handlePreviousPage}
                                    disabled={page === 1}
                                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
                                >
                                    Trước
                                </button>
                                {Array.from({length: totalPages}, (_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handlePageClick(index + 1)}
                                        className={`px-4 py-2 mx-1 ${
                                            page === index + 1 ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
                                        } rounded-md`}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                                <button
                                    onClick={handleNextPage}
                                    disabled={page === totalPages}
                                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
                                >
                                    Tiếp theo
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProductPage;
