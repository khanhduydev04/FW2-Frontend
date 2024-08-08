import { useForm } from "react-hook-form";
import { addProduct } from "../../../services/product";
import { useEffect, useState } from "react";
import { getCategories } from "../../../services/category";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddProductPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchCategories();
  }, []);
  const fetchCategories = async () => {
    const res = await getCategories();
    if (res) {
      setCategories(res.data.data.categories);
    }
  };
  const submitAddProduct = async (value) => {
    const formData = new FormData();
    formData.append("name", value.name);
    formData.append("price", value.price);
    formData.append("discount", value.discount / 100);
    formData.append("quantity", value.quantity);
    formData.append("description", value.description);
    formData.append("short_description", value.short_description);
    formData.append("category", value.category);
    for (let i = 0; i < value.images.length; i++) {
      formData.append("images", value.images[i]);
    }
    try {
      const response = await addProduct(formData);
      if (response) {
        toast.success("Thêm sản phẩm thành công");
        navigate("/admin/products");
      } else {
        toast.error("Thêm sản phẩm thất bại");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Thêm sản phẩm thất bại");
    }
  };

  return (
    <div className="bg-white rounded-xl py-10 px-[66px]">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="relative h-[585px]">
          <div className="px-4">
            <h1 className="text-xl font-bold leading-6 text-gray-900 mb-5">
              Thêm sản phẩm
            </h1>
            <form
              action=""
              id="addCategory"
              onSubmit={handleSubmit(submitAddProduct)}
              encType="multipart/form-data"
            >
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mb-5">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
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
                      <p className="mt-2 text-sm text-red-600">
                        {errors.name.message}
                      </p>
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
                        required: "Giá không được để trống",
                      })}
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset"
                    />
                    {errors.price && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.price.message}
                      </p>
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
                      autoComplete="given-name"
                      {...register("discount", {
                        min: {
                          value: 0,
                          message: "Giảm giá phải lớn hơn hoặc bằng 0",
                        },
                        max: {
                          value: 100,
                          message: "Giảm giá phải nhỏ hơn hoặc bằng 100",
                        },
                      })}
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset"
                    />
                    {errors.discount && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.discount.message}
                      </p>
                    )}
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
                        min: {
                          value: 1,
                          message: "Số lượng phải lớn hơn hoặc bằng 1",
                        },
                      })}
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset"
                    />
                    {errors.quantity && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.quantity.message}
                      </p>
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
                      <p className="mt-2 text-sm text-red-600">
                        {errors.description.message}
                      </p>
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
                      <p className="mt-2 text-sm text-red-600">
                        {errors.short_description.message}
                      </p>
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
                        required: "Hình ảnh không được để trống",
                      })}
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset"
                    />
                    {errors.images && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.images.message}
                      </p>
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
                      defaultValue={""}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="" defaultChecked disabled>
                        Chọn danh mục
                      </option>
                      {categories.map((category, index) => (
                        <option key={index} value={category._id}>
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
