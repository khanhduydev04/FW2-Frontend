import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authLogin } from "../../../store/reducers/authSlice";
import { useEffect } from "react";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth);

  const schemaValidation = yup.object({
    username: yup
      .string()
      .required("Thông tin bắt buộc. Vui lòng nhập đầy đủ."),
    password: yup
      .string()
      .required("Thông tin bắt buộc. Vui lòng nhập đầy đủ.")
      .min(6, "Mật khẩu phải có ít nhất 6 ký tự."),
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schemaValidation),
  });

  const handleLogin = (values) => {
    try {
      dispatch(authLogin(values));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (auth.user && auth.user.username) {
      auth.user.role === "admin"
        ? navigate("/admin/categories")
        : navigate("/");
    }
  }, [auth, navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen px-6 py-12 lg:px-8 bg-gray-100">
      <div className=" w-2/5 py-10 rounded-lg bg-white shadow-md">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="font-bold text-3xl text-green-600 text-center">
            <a href="/">Pharmartist</a>
          </h1>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Đăng nhập
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>
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
                  placeholder="Username"
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
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold  text-green-600 hover:text-green-300"
                  >
                    Quên mật khẩu?
                  </a>
                </div>
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
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700"
              >
                {isSubmitting ? (
                  <div className="mx-auto w-5 h-5 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  "Đăng nhập"
                )}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Chưa có tài khoản?
            <Link
              to={"/tai-khoan/dang-ky"}
              className="inline-block ml-2 font-semibold leading-6 text-green-600 hover:text-green-500"
            >
              Tạo tài khoản mới
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
