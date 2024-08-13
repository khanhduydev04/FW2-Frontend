import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {deleteProductImage, getProductById, updateProduct} from "../../../services/product";
import {useForm} from "react-hook-form";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {getCategories} from "../../../services/category";
import {toast} from "react-toastify";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

const EditProductPage = () => {
    const axiosInstanceWithAuth = useAxiosPrivate();
    const {
        register,
        handleSubmit,
        setValue,
        formState: {errors},
    } = useForm();
    const params = useParams();
    const [product, setProduct] = useState({});
    const [categories, setCategories] = useState([]);
    const deleteImage = async (id) => {
        try {
            await deleteProductImage(axiosInstanceWithAuth, product._id, id);
            toast.success("Xóa hình ảnh thành công");
            setProduct((prevProduct) => ({
              ...prevProduct,
              images: prevProduct.images.filter((image) => image.id !== id),
          }));
        } catch (error) {
            toast.error("Xóa hình ảnh thất bại");
        }
    };
    useEffect(() => {
        const fetchProductAndCategories = async () => {
            const categoriesRes = await getCategories();
            const res = await getProductById(params.id);
            setCategories(categoriesRes.data);
            setProduct(res.data.data);

            if (res.data.data) {
                setValue("name", res.data.data.name);
                setValue("price", res.data.data.price);
                setValue("discount", res.data.data.discount * 100);
                setValue("quantity", res.data.data.quantity);
                setValue("description", res.data.data.description);
                setValue("short_description", res.data.data.short_description);
            }
        };

        fetchProductAndCategories();
    }, [params.id, setValue, product]);
    const submitEdit = async (value) => {
        const formData = new FormData();
        if (value?.name) formData.append("name", value.name);
        if (value?.price) formData.append("price", value.price);
        if (value?.discount) formData.append("discount", value.discount / 100);
        if (value?.quantity) formData.append("quantity", value.quantity);
        if (value?.description) formData.append("description", value.description);
        if (value?.short_description) formData.append("short_description", value.short_description);
        if (value?.category) formData.append("category", value.category);
        if (value?.images && value.images.length > 0) {
            for (let i = 0; i < value.images.length; i++) {
                formData.append("images", value.images[i]);
            }
        }
        try {
            const res = await updateProduct(axiosInstanceWithAuth, params.id, formData);
            if (res) {
                toast.success("Cập nhật sản phẩm thành công");
                setProduct(res.data.data);
            }
        } catch (error) {
            console.log(error);
            toast.error("Cập nhật sản phẩm thất bại");
        }
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
                                            {...register("name", {
                                                required: "Tên sản phẩm không được để trống",
                                            })}
                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset"
                                        />
                                        {errors.name && (
                                            <span className="text-red-500 text-sm">{errors.name.message}</span>
                                        )}
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
                                            {...register("price", {
                                                required: "Giá bán không được để trống",
                                            })}
                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset"
                                        />
                                        {errors.price && (
                                            <span className="text-red-500 text-sm">{errors.price.message}</span>
                                        )}
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
                                            {...register("quantity", {
                                                required: "Số lượng không được để trống",
                                            })}
                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset"
                                        />
                                        {errors.quantity && (
                                            <span className="text-red-500 text-sm">{errors.quantity.message}</span>
                                        )}
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
                                            {...register("description", {
                                                required: "Mô tả không được để trống",
                                            })}
                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset"
                                        ></textarea>
                                        {errors.description && (
                                            <span className="text-red-500 text-sm">{errors.description.message}</span>
                                        )}
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
                                            {...register("short_description", {
                                                required: "Mô tả ngắn không được để trống",
                                            })}
                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset"
                                        ></textarea>
                                        {errors.short_description && (
                                            <span className="text-red-500 text-sm">
                                                {errors.short_description.message}
                                            </span>
                                        )}
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
                                            {...register("images", {
                                                validate: (value) => {
                                                    if (product.images.length === 0 && (!value || value.length === 0)) {
                                                        return "Hình ảnh không được để trống";
                                                    }
                                                    return true;
                                                },
                                            })}
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
                                                            <button
                                                                className="absolute top-0 right-0"
                                                                type="button"
                                                                onClick={() => deleteImage(image._id)}
                                                            >
                                                                <FontAwesomeIcon
                                                                    icon={faTrash}
                                                                    className="text-red-500"
                                                                />
                                                            </button>
                                                        </div>
                                                    );
                                                })}
                                        </div>
                                        {errors.images && (
                                            <span className="text-red-500 text-sm">{errors.images.message}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="short_description"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Danh mục
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            name="category"
                                            id="category"
                                            {...register("category")}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            {categories.map((category, index) => (
                                                <option
                                                    key={index}
                                                    value={category._id}
                                                    defaultChecked={product.category === category._id}
                                                >
                                                    {category.name}
                                                </option>
                                            ))}
                                        </select>
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
