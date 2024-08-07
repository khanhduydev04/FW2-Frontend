import {useForm} from "react-hook-form";
import {addProduct} from "../../../services/product";

const AddProductPage = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();
    const submitAddProduct = async (value) => {
        const formData = new FormData();
        formData.append("name", value.name);
        formData.append("price", value.price);
        formData.append("discount", value.discount);
        formData.append("quantity", value.quantity);
        formData.append("description", value.description);
        formData.append("short_description", value.short_description);
        for (let i = 0; i < value.images.length; i++) {
            formData.append("images", value.images[i]);
        }
        try {
            const response = await addProduct(formData);
            if (response) {
                console.log("Thêm sản phẩm thành công");
            } else {
                console.error("Thêm sản phẩm thất bại");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return (
        <div className="bg-white rounded-xl py-10 px-[66px]">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="relative h-[585px]">
                    <div className="px-4">
                        <h1 className="text-xl font-bold leading-6 text-gray-900 mb-5">Thêm sản phẩm</h1>
                        <form action="" id="addCategory" onSubmit={handleSubmit(submitAddProduct)} encType="multipart/form-data">
                            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mb-5">
                                <div className="sm:col-span-3">
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Tên sản phẩm
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            autoComplete="given-name"
                                            {...register("name")}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="price"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Giá bán
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="number"
                                            name="price"
                                            id="price"
                                            autoComplete="given-name"
                                            {...register("price")}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="discount"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Giảm giá (%)
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="number"
                                            name="discount"
                                            id="discount"
                                            min={0}
                                            max={100}
                                            autoComplete="given-name"
                                            {...register("discount")}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="quantity"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Số lượng
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="number"
                                            name="tquantity"
                                            id="quantity"
                                            autoComplete="given-name"
                                            {...register("quantity")}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="description"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Mô tả
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            name="description"
                                            id="description"
                                            {...register("description")}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="short_description"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Mô tả ngắn
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            name="short_description"
                                            id="short_description"
                                            {...register("short_description")}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="images"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Hình ảnh
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="file"
                                            name="images"
                                            id="images"
                                            multiple
                                            autoComplete="family-name"
                                            {...register("images")}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 transition-colors"
                            >
                                Thêm sản phẩm
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProductPage;
