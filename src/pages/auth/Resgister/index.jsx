import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { authRegister } from "../../../store/reducers/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);

  const schemaValidation = yup.object({
    fullname: yup
      .string()
      .required("Thông tin bắt buộc. Vui lòng nhập đầy đủ."),
    username: yup
      .string()
      .required("Thông tin bắt buộc. Vui lòng nhập đầy đủ."),
    password: yup
      .string()
      .required("Thông tin bắt buộc. Vui lòng nhập đầy đủ.")
      .min(6, "Mật khẩu phải có ít nhất 6 ký tự."),
    "confirm-password": yup
      .string()
      .required("Thông tin bắt buộc. Vui lòng nhập đầy đủ.")
      .oneOf([yup.ref("password"), null], "Mật khẩu không khớp."),
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schemaValidation),
  });

  const handleRegister = async (values) => {
    try {
      dispatch(
        authRegister({
          username: values.username,
          fullname: values.fullname,
          password: values.password,
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (user && user.username) {
      navigate("/tai-khoan/dang-nhap");
    }
  }, [navigate, user]);

  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-12 lg:px-8 bg-gray-100">
      <div className="w-2/5 py-10 bg-white shadow-lg rounded-lg">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="font-bold text-3xl text-green-600 text-center">
            <a href="/">Pharmartist</a>
          </h1>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Đăng ký
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(handleRegister)}>
            <div>
              <label
                htmlFor="fullname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Họ và tên
              </label>
              <div className="mt-2">
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  className={`block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                    errors.fullname
                      ? "ring-red-500 bg-red-50 focus:ring-red-500"
                      : "ring-gray-300 bg-white focus:ring-green-600"
                  } focus:outline-none sm:text-sm sm:leading-6`}
                  placeholder="Họ và tên"
                  {...register("fullname")}
                />
                {errors?.fullname && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.fullname?.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  className={`block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                    errors.username
                      ? "ring-red-500 bg-red-50 focus:ring-red-500"
                      : "ring-gray-300 bg-white focus:ring-green-600"
                  } focus:outline-none sm:text-sm sm:leading-6`}
                  placeholder="Tên đăng nhập"
                  {...register("username")}
                />
                {errors?.username && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.username?.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mật khẩu
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  className={`block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                    errors.password
                      ? "ring-red-500 bg-red-50 focus:ring-red-500"
                      : "ring-gray-300 bg-white focus:ring-green-600"
                  } focus:outline-none sm:text-sm sm:leading-6`}
                  placeholder="Mât khẩu"
                  {...register("password")}
                />
                {errors?.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password?.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Xác nhận mật khẩu
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  className={`block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                    errors["confirm-password"]
                      ? "ring-red-500 bg-red-50 focus:ring-red-500"
                      : "ring-gray-300 bg-white focus:ring-green-600"
                  } focus:outline-none sm:text-sm sm:leading-6`}
                  placeholder="Xác nhận mật khẩu"
                  {...register("confirm-password")}
                />
                {errors["confirm-password"] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors["confirm-password"]?.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700"
              >
                {isSubmitting ? (
                  <div className="mx-auto size-6 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  "Đăng ký"
                )}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Đã có tài khoản?
            <a
              href="/tai-khoan/dang-nhap"
              className="inline-block ml-2 font-semibold leading-6 text-green-600 hover:text-green-500"
            >
              Đăng nhập
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
