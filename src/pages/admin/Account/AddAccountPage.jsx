import React from 'react';
import { useForm } from 'react-hook-form';

const AddAccountPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-white rounded-xl py-10 px-[66px]">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="relative h-[585px]">
          <div className="px-4">
            <h1 className="text-xl font-bold leading-6 text-gray-900 mb-5">
              Thêm tài khoản
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} id="addAccount">
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
                      {...register('name', { required: 'Tên người dùng không được để trống' })}
                      autoComplete="given-name"
                      className={`block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                        errors.name ? 'ring-red-500' : ''
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
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
                      {...register('username', { required: 'Username không được để trống' })}
                      autoComplete="username"
                      className={`block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                        errors.username ? 'ring-red-500' : ''
                      }`}
                    />
                    {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
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
                      {...register('email', {
                        required: 'Email không được để trống',
                        pattern: {
                          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                          message: 'Email không hợp lệ',
                        }
                      })}
                      autoComplete="email"
                      className={`block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                        errors.email ? 'ring-red-500' : ''
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
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
                      {...register('description')}
                      autoComplete="description"
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset"
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 transition-colors"
              >
                Thêm tài khoản
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAccountPage;
