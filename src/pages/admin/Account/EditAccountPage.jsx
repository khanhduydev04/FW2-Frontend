import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { getUserById, updateUser } from "../../../services/auth";
import { toast } from "react-toastify";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { useEffect, useState } from "react";

const EditAccountPage = () => {
  const axiosInstanceWithAuth = useAxiosPrivate();
  const { id } = useParams();
  const [, setUser] = useState(null);
  const navigate = useNavigate();
  const schemaValidation = yup.object({
    fullname: yup
      .string()
      .required("Thông tin bắt buộc. Vui lòng nhập đầy đủ."),
    username: yup
      .string()
      .required("Thông tin bắt buộc. Vui lòng nhập đầy đủ."),
  });

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schemaValidation),
  });

  const fetchUser = async () => {
    const res = await getUserById(axiosInstanceWithAuth, id);
    if (res) {
      setUser(res.data);
      reset({
        fullname: res.data.fullname,
        username: res.data.username,
      });
    }
  };

  const onSubmit = async (data) => {
    const res = await updateUser(axiosInstanceWithAuth, id, data);
    if (res) {
      toast.success("Cập nhật tài khoản thành công");
      navigate("/admin/account");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="bg-white rounded-xl py-10 px-[66px]">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="relative h-[585px]">
          <div className="px-4">
            <h1 className="text-xl font-bold leading-6 text-gray-900 mb-5">
              Cập nhật tài khoản
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mb-5">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="fullname"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Họ và tên
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="fullname"
                      {...register("fullname")}
                      className={`block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                        errors.fullname ? "ring-red-500" : ""
                      }`}
                    />
                    {errors.fullname && (
                      <p className="text-red-500 text-sm">
                        {errors.fullname.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Username
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="username"
                      {...register("username")}
                      className={`block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                        errors.username ? "ring-red-500" : ""
                      }`}
                    />
                    {errors.username && (
                      <p className="text-red-500 text-sm">
                        {errors.username.message}
                      </p>
                    )}
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

export default EditAccountPage;
