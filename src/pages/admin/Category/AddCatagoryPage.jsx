import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { createCategory } from "../../../services/category";
import { useNavigate } from "react-router-dom";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

const AddCategoryPage = () => {
  const axiosInstanceWithAuth = useAxiosPrivate();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleCreateCategory = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("image", data.image[0]);
      const res = await createCategory(axiosInstanceWithAuth, formData);
      if (res.data) {
        toast.success("Thêm danh mục thành công");
        navigate("/admin/categories");
      }
    } catch (error) {
      console.log(error);
      toast.error("Thêm danh mục thất bại");
    }
  };

  return (
    <div className="bg-white rounded-xl py-10 px-[66px]">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="relative h-[585px]">
          <div className="px-4">
            <h1 className="text-xl font-bold leading-6 text-gray-900 mb-5">
              Thêm danh mục
            </h1>
            <form
              onSubmit={handleSubmit(handleCreateCategory)}
              encType="multipart/form-data"
            >
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mb-5">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Tên danh mục
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="given-name"
                      className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                      {...register("name", {
                        required: "Tên danh mục không được để trống",
                      })}
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <span className="block text-sm font-medium leading-6 text-gray-900">
                    Hình ảnh
                  </span>
                  <div className="mt-2 flex items-center gap-x-3">
                    <input
                      type="file"
                      id="image"
                      name="image"
                      className="hidden"
                      {...register("image")}
                    />
                    <label
                      htmlFor="image"
                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 cursor-pointer"
                    >
                      Tải ảnh lên
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="flex justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700"
              >
                {isSubmitting ? (
                  <div className="mx-auto w-5 h-5 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  "Thêm danh mục"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryPage;
