import React from "react";
import { useForm } from "react-hook-form";

const EditAccountPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Thực hiện cập nhật tài khoản với dữ liệu đã hợp lệ
  };

  return (
    <div className="bg-white rounded-xl py-10 px-[66px]">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="relative h-[585px]">
          <div className="px-4">
            <h1 className="text-xl font-bold leading-6 text-gray-900 mb-5">
              Cập nhật tài khoản
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} id="editAccountForm">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mb-5">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Tên người dùng
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="name"
                      {...register("name", { required: "Tên người dùng không được để trống" })}
                      autoComplete="given-name"
                      className={`block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                        errors.name ? "ring-red-500" : ""
                      }`}
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
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Username
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="username"
                      {...register("username", { required: "Username không được để trống" })}
                      autoComplete="username"
                      className={`block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                        errors.username ? "ring-red-500" : ""
                      }`}
                    />
                    {errors.username && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.username.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      id="email"
                      {...register("email", { required: "Email không được để trống" })}
                      autoComplete="email"
                      className={`block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                        errors.email ? "ring-red-500" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.email.message}
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
                    <input
                      type="text"
                      id="description"
                      {...register("description")}
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset"
                    />
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

export default EditAccountPage;
