import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import { toast } from "react-toastify";
import { updateCategory, getCategoryById } from "../../../services/category";
import { useEffect } from "react";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

const EditCatagoryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosInstanceWithAuth = useAxiosPrivate();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    // resolver: yupResolver(schemaValidation),
  });

  const fetchCategory = async () => {
    try {
      const res = await getCategoryById(id);
      if (res) {
        console.log(res.data.data);
        reset({
          name: res.data.data.name,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateCategory = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("image", data.image[0]);
      const res = await updateCategory(axiosInstanceWithAuth, id, formData);
      if (res.data) {
        toast.success("Cập nhật danh mục thành công");
        navigate("/admin/categories");
      }
    } catch (error) {
      console.log(error);
      toast.error("Cập nhật danh mục thất bại");
    }
  };

  useEffect(() => {
    fetchCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-white rounded-xl py-10 px-[66px]">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="relative h-[585px]">
          <div className="px-4">
            <h1 className="text-xl font-bold leading-6 text-gray-900 mb-5">
              Cập nhật danh mục
            </h1>
            <form
              onSubmit={handleSubmit(handleUpdateCategory)}
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
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset"
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
                  "Cập nhật"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCatagoryPage;
