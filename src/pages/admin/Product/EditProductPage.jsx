import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById, updateProduct } from "../../../services/product";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const EditProductPage = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();
    const params = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        console.log("path params === ", params.id);
        fetchProduct();
    }, []);
    useEffect(() => {
        if (product) {
            setValue("name", product.name);
            setValue("price", product.price);
            setValue("discount", product.discount * 100);
            setValue("quantity", product.quantity);
            setValue("description", product.description);
            setValue("short_description", product.short_description);
            // Handle images separately if needed
        }
    }, [product, setValue]);
    const fetchProduct = async () => {
        const res = await getProductById(params.id);
        console.log("res::::", res.data.data.images);
        setProduct(res.data.data);
    };
    const submitEdit = async (value) => {
        const formData = new FormData();
        if (value?.name) formData.append("name", value.name);
        if (value?.price) formData.append("price", value.price);
        if (value?.discount) formData.append("discount", value.discount / 100);
        if (value?.quantity) formData.append("quantity", value.quantity);
        if (value?.description) formData.append("description", value.description);
        if (value?.short_description) formData.append("short_description", value.short_description);
        if (value?.images && value.images.length > 0) {
            for (let i = 0; i < value.images.length; i++) {
                formData.append("images", value.images[i]);
            }
        }
        updateProduct(params.id, formData).then((result) => {
            setProduct(result.data.data)
        }).catch((err) => {
            console.error(err);

        });
    };
    return (
        <div className="bg-white rounded-xl py-10 px-[66px]">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="relative h-[585px]">
                    <div className="px-4">
                        <h1 className="text-xl font-bold leading-6 text-gray-900 mb-5">Cập nhật sản phẩm</h1>
                        <form
                            action=""
                            id="editCategory"
                            onSubmit={handleSubmit(submitEdit)}
                            encType="multipart/form-data"
                        >
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
                                            {...register("name", { required: "Tên sản phẩm không được để trống" })}
                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset"
                                        />
                                        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
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
                                            {...register("price", { required: "Giá bán không được để trống" })}
                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset"
                                        />
                                        {errors.price && <span className="text-red-500 text-sm">{errors.price.message}</span>}
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
                                            step={0.01}
                                            autoComplete="given-name"
                                            {...register("discount")}
                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset"
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
                                            name="quantity"
                                            id="quantity"
                                            autoComplete="given-name"
                                            {...register("quantity", { required: "Số lượng không được để trống" })}
                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset"
                                        />
                                        {errors.quantity && <span className="text-red-500 text-sm">{errors.quantity.message}</span>}
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
                                            {...register("description", { required: "Mô tả không được để trống" })}
                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset"
                                        ></textarea>
                                        {errors.description && <span className="text-red-500 text-sm">{errors.description.message}</span>}
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
                                            {...register("short_description", { required: "Mô tả ngắn không được để trống" })}
                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset"
                                        ></textarea>
                                        {errors.short_description && <span className="text-red-500 text-sm">{errors.short_description.message}</span>}
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
                                            {...register("images", { required: "Hình ảnh không được để trống" })}
                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset"
                                        />
                                        <div className="flex gap-2 mt-3">
                                            {product.images &&
                                                product.images.map((image, index) => {
                                                    return (
                                                        <div className="relative " key={index}>
                                                            <img
                                                                src={image.url}
                                                                alt={product.name}
                                                                className="size-24"
                                                            />
                                                            <button className="absolute top-0 right-0" type="button">
                                                                <FontAwesomeIcon
                                                                    icon={faTrash}
                                                                    className="text-red-500"
                                                                />
                                                            </button>
                                                        </div>
                                                    );
                                                })}
                                        </div>
                                        {errors.images && <span className="text-red-500 text-sm">{errors.images.message}</span>}
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 transition-colors"
                            >
                                Cập nhật
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProductPage;
