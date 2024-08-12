import { useForm } from "react-hook-form";
import { faChevronLeft, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useEffect, useState } from "react";
import { getTokens } from "../../utils/auth";
import { getCartByUser } from "../../services/cart";
import { calculateTotals, formatCurrency } from "../../utils/common";
import { jwtDecode } from "jwt-decode";
import useSWR from "swr";
import {
  fetchDistricts,
  fetchProvinces,
  fetchWards,
} from "../../services/loaction";

const PayPage = () => {
  const axiosInstanceWithAuth = useAxiosPrivate();
  const [carts, setCarts] = useState([]);
  const { accessToken, refreshToken } = getTokens();
  const decode = jwtDecode(accessToken);
  const user = {
    id: decode.id,
    fullname: decode.fullname,
    username: decode.username,
  };

  const { totalAmount, totalDiscount, totalAfterDiscount } =
    calculateTotals(carts);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedProvinceName, setSelectedProvinceName] = useState("");
  const [selectedDistrictName, setSelectedDistrictName] = useState("");
  const [selectedWardName, setSelectedWardName] = useState("");

  const {
    data: provinces,
    error: provincesError,
    isLoading: isLoadingProvinces,
  } = useSWR("https://open.oapi.vn/location/provinces?size=63", fetchProvinces);

  const {
    data: districts,
    error: districtsError,
    isLoading: isLoadingDistricts,
  } = useSWR(
    selectedProvince
      ? `https://open.oapi.vn/location/districts?provinceId=${selectedProvince}`
      : null,
    () => fetchDistricts(selectedProvince)
  );

  const {
    data: wards,
    error: wardsError,
    isLoading: isLoadingWards,
  } = useSWR(
    selectedDistrict
      ? `https://open.oapi.vn/location/wards?districtId=${selectedDistrict}`
      : null,
    () => fetchWards(selectedDistrict)
  );

  const handleProvinceChange = (event) => {
    const selectedProvinceId = event.target.value;
    setSelectedProvince(selectedProvinceId);
    if (provinces && provinces.data) {
      const selectedProvince = provinces.data.find(
        (province) => province.id === selectedProvinceId
      );
      setSelectedProvinceName(selectedProvince?.name || "");
    }
  };

  const handleDistrictChange = (event) => {
    const selectedDistrictId = event.target.value;
    setSelectedDistrict(selectedDistrictId);
    if (districts && districts.data) {
      const selectedDistrict = districts.data.find(
        (district) => district.id === selectedDistrictId
      );
      setSelectedDistrictName(selectedDistrict?.name || "");
    }
  };

  const handleWardChange = (event) => {
    const selectedWardId = event.target.value;
    if (wards && wards.data) {
      const selectedWard = wards.data.find(
        (ward) => ward.id === selectedWardId
      );
      setSelectedWardName(selectedWard?.name || "");
    }
  };

  const fetchCart = async () => {
    if (accessToken && refreshToken) {
      const res = await getCartByUser(axiosInstanceWithAuth);
      setCarts(res.data.items);
    }
  };

  const onSubmit = (data) => {
    console.log({
      ...data,
      province: selectedProvinceName,
      district: selectedDistrictName,
      ward: selectedWardName,
    });
  };

  useEffect(() => {
    fetchCart();

    reset({
      name: user?.fullname,
      numberphone: "",
      email: "",
      recipientName: user?.fullname,
      recipientPhone: "",
      address: "",
      note: "",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-neutral-100">
      {!accessToken && !refreshToken ? (
        <div className="container py-4">
          <div className="p-3 rounded-lg bg-white w-1/3 mx-auto flex flex-col items-center">
            <p className="font-medium text-lg mb-3">
              Vui lòng đăng nhập để mua hàng
            </p>
            <Link
              to={"/tai-khoan/dang-nhap"}
              className="p-2 text-white bg-green-600 text-center font-medium rounded-md"
            >
              Đăng nhập
            </Link>
          </div>
        </div>
      ) : (
        <div className="container py-4">
          <div className="flex justify-start items-center gap-3 text-green-600">
            <Link
              to="/gio-hang"
              className="flex gap-x-2 items-center font-medium"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
              <p>Quay lại giỏ hàng</p>
            </Link>
          </div>
          <p className="my-4 font-medium">Danh sách sản phẩm</p>
          <div className="flex justify-between gap-6 relative">
            <div className="w-2/3">
              <div className="p-4 rounded-xl bg-white divide-y">
                {carts.length > 0 &&
                  carts.map(({ product_id, quantity }, index) => (
                    <div
                      className="flex justify-between gap-4 my-3 pt-3"
                      key={index}
                    >
                      <img
                        src={product_id.images[0].url}
                        className="w-14 h-14 p-1 rounded-xl border-[1px]"
                        alt={product_id.name}
                      />
                      <p>{product_id.name}</p>
                      <div className="flex justify-end items-center gap-14 w-1/3">
                        <div>
                          <p className="font-semibold">
                            {product_id.discount > 0
                              ? formatCurrency(
                                  Number(product_id.price) *
                                    (1 - Number(product_id.discount))
                                )
                              : formatCurrency(product_id.price)}
                          </p>
                          {product_id.discount > 0 && (
                            <span className="text-base line-through text-neutral-400">
                              {formatCurrency(product_id.price)}
                            </span>
                          )}
                        </div>
                        <p>x{quantity}</p>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="bg-white p-4 mt-4">
                <div className="flex justify-start items-center gap-4 mb-4">
                  <FontAwesomeIcon
                    className="text-xl text-green-600"
                    icon={faUser}
                  />
                  <p className="font-medium">Thông tin người đặt</p>
                </div>
                <form>
                  <div className="flex justify-center gap-4 mb-3">
                    <div className="w-1/2">
                      <input
                        type="text"
                        id="name"
                        {...register("name", {
                          required: "Họ và tên người đặt không được để trống",
                        })}
                        className={`w-full h-14 border-[1px] border-gray-300 rounded-md mt-1 ps-4 focus:ring-green-600 focus:outline-none ${
                          errors.name ? "border-red-500 focus:ring-red-500" : ""
                        }`}
                        placeholder="Họ và tên người đặt"
                      />
                      {errors.name && (
                        <p className="text-red-500">{errors.name.message}</p>
                      )}
                    </div>
                    <div className="w-1/2">
                      <input
                        type="text"
                        id="numberphone"
                        {...register("numberphone", {
                          required: "Số điện thoại không được để trống",
                        })}
                        className={`w-full h-14 border-[1px] border-gray-300 rounded-md mt-1 ps-4 focus:ring-green-600 focus:outline-none ${
                          errors.numberphone
                            ? "border-red-500 focus:ring-red-500"
                            : ""
                        }`}
                        placeholder="Số điện thoại"
                      />
                      {errors.numberphone && (
                        <p className="text-red-500">
                          {errors.numberphone.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      id="email"
                      {...register("email")}
                      className="w-full h-14 border-[1px] border-gray-300 rounded-md mt-1 ps-4 focus:ring-green-600 focus:outline-none"
                      placeholder="Email (không bắt buộc)"
                    />
                  </div>
                  <div className="flex justify-start items-center gap-4 my-4">
                    <FontAwesomeIcon
                      className="text-xl text-green-600"
                      icon={faUser}
                    />
                    <p className="font-medium">Thông tin người nhận</p>
                  </div>
                  <div className="flex justify-center gap-4 mb-3">
                    <div className="w-1/2">
                      <input
                        type="text"
                        id="recipientName"
                        {...register("recipientName", {
                          required: "Họ và tên người nhận không được để trống",
                        })}
                        className={`w-full h-14 border-[1px] border-gray-300 rounded-md mt-1 ps-4 focus:ring-green-600 focus:outline-none ${
                          errors.recipientName
                            ? "border-red-500 focus:ring-red-500"
                            : ""
                        }`}
                        placeholder="Họ và tên người nhận"
                      />
                      {errors.recipientName && (
                        <p className="text-red-500">
                          {errors.recipientName.message}
                        </p>
                      )}
                    </div>
                    <div className="w-1/2">
                      <input
                        type="text"
                        id="recipientPhone"
                        {...register("recipientPhone", {
                          required: "Số điện thoại không được để trống",
                        })}
                        className={`w-full h-14 border-[1px] border-gray-300 rounded-md mt-1 ps-4 focus:ring-green-600 focus:outline-none ${
                          errors.recipientPhone
                            ? "border-red-500 focus:ring-red-500"
                            : ""
                        }`}
                        placeholder="Số điện thoại"
                      />
                      {errors.recipientPhone && (
                        <p className="text-red-500">
                          {errors.recipientPhone.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-center gap-4 mb-3">
                    <select
                      id="provinceId"
                      {...register("provinceId", {
                        required: "Vui lòng chọn Tỉnh/Thành phố",
                      })}
                      onChange={handleProvinceChange}
                      className={`w-full h-14 border-[1px] border-gray-300 rounded-md mt-1 ps-4 focus:ring-green-600 focus:outline-none pe-4 mb-3 ${
                        errors.provinceId
                          ? "border-red-500 focus:ring-red-500"
                          : ""
                      }`}
                    >
                      <option value="">Chọn Tỉnh/Thành phố</option>
                      {provinces &&
                        provinces.data.length > 0 &&
                        provinces?.data.map((province) => (
                          <option key={province.id} value={province.id}>
                            {province.name}
                          </option>
                        ))}
                    </select>
                    <select
                      id="districtId"
                      {...register("districtId", {
                        required: "Vui lòng chọn Huyện/Quận",
                      })}
                      onChange={handleDistrictChange}
                      disabled={!selectedProvince && districts?.data.length > 0}
                      className={`w-full h-14 border-[1px] border-gray-300 rounded-md mt-1 ps-4 focus:ring-green-600 focus:outline-none pe-4 mb-3 ${
                        errors.districtId
                          ? "border-red-500 focus:ring-red-500"
                          : ""
                      }${
                        selectedProvince ? "" : "bg-gray-200 cursor-not-allowed"
                      }`}
                    >
                      <option value="">Chọn Huyện/Quận</option>
                      {districts &&
                        districts?.data.length > 0 &&
                        districts?.data?.map((district) => (
                          <option key={district.id} value={district.id}>
                            {district.name}
                          </option>
                        ))}
                    </select>
                  </div>

                  <select
                    id="wardId"
                    {...register("wardId", {
                      required: "Vui lòng chọn Xã/Phường",
                    })}
                    disabled={!selectedDistrict && wards?.data.length > 0}
                    className={`w-full h-14 border-[1px] border-gray-300 rounded-md mt-1 ps-4 focus:ring-green-600 focus:outline-none pe-4 mb-3 ${
                      errors.wardId ? "border-red-500 focus:ring-red-500" : ""
                    }${
                      selectedDistrict ? "" : "bg-gray-200 cursor-not-allowed"
                    }`}
                    onChange={handleWardChange}
                  >
                    <option value="">Chọn Xã/Phường</option>
                    {wards &&
                      wards?.data.length > 0 &&
                      wards?.data?.map((ward) => (
                        <option key={ward.id} value={ward.id}>
                          {ward.name}
                        </option>
                      ))}
                  </select>
                  <div className="w-full">
                    <input
                      type="text"
                      id="address"
                      {...register("address", {
                        required: "Nhập địa chỉ cụ thể không được để trống",
                      })}
                      className={`w-full h-14 border-[1px] border-gray-300 rounded-md mt-1 ps-4 focus:ring-green-600 focus:outline-none mb-3 ${
                        errors.address
                          ? "border-red-500 focus:ring-red-500"
                          : ""
                      }`}
                      placeholder="Nhập địa chỉ cụ thể"
                    />
                    {errors.address && (
                      <p className="text-red-500">{errors.address.message}</p>
                    )}
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      id="note"
                      {...register("note")}
                      className="w-full h-14 border-[1px] border-gray-300 rounded-md mt-1 ps-4 focus:ring-green-600 focus:outline-none mb-3"
                      placeholder="Ghi chú"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="w-1/3">
              <div className="sticky top-2.5">
                <div className="bg-white p-4 rounded-t-xl">
                  <div className="w-full">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <span className="text-gray-700">Tổng tiền</span>
                      </div>
                      <div className="font-medium">
                        {totalAmount > 0
                          ? formatCurrency(totalAmount)
                          : formatCurrency(0)}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <span className="text-gray-700">Giảm giá</span>
                      </div>
                      <div className="font-medium text-yellow-500">
                        -{" "}
                        {totalDiscount > 0
                          ? formatCurrency(totalDiscount)
                          : formatCurrency(0)}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <span className="text-gray-700">Tiết kiệm được</span>
                      </div>
                      <div className="font-medium text-yellow-500">
                        {totalDiscount > 0
                          ? formatCurrency(totalDiscount)
                          : formatCurrency(0)}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <span className="text-gray-700">Phí vận chuyển</span>
                      </div>
                      <div className="font-medium text-green-600">Miễn phí</div>
                    </div>
                  </div>
                  <div className="w-full h-[1px] bg-gray-300"></div>
                  <div className="flex justify-between items-center font-medium my-3">
                    <p className="text-lg">Thành tiền</p>
                    <p className="text-green-600 text-xl">
                      {totalAfterDiscount > 0
                        ? formatCurrency(totalAfterDiscount)
                        : formatCurrency(0)}
                    </p>
                  </div>
                  <button
                    className="w-full h-12 bg-green-600 rounded-full text-white font-medium"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Hoàn thành
                  </button>
                </div>
                <div
                  style={{
                    height: "24px",
                    background: "white",
                    mask: "radial-gradient(11.52px at 50% calc(100% - 15.45px), rgb(0, 0, 0) 99%, rgba(0, 0, 0, 0) 101%) calc(50% - 20.6px) 0px / 41.2px 100%, radial-gradient(11.52px at 50% calc(100% + 5.15px), rgba(0, 0, 0, 0) 99%, rgb(0, 0, 0) 101%) 50% calc(100% - 10.3px) / 41.2px 100% repeat-x",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PayPage;
