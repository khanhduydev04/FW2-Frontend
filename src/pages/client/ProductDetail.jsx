import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const ProductDetail = () => {
  const [activeId, setActiveId] = useState("describe");

  const handleNavClick = (id) => {
    setActiveId(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="bg-gray-100">
        <div className="container mx-auto p-10">
          <div className="grid grid-cols-12 bg-white rounded-xl mb-8">
            <div className="col-span-12 md:col-span-5 ">
              <div className="w-full p-6 sticky top-0">
                <div className="p-5">
                  <img
                    src="https://cdn.nhathuoclongchau.com.vn/unsafe/375x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_05612_2244c1f439.jpg"
                    className="w-full"
                    alt=""
                  />
                </div>
                <div className="flex justify-center align-middle gap-4">
                  <div className="border rounded-xl">
                    <img
                      src="https://cdn.nhathuoclongchau.com.vn/unsafe/375x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_05612_2244c1f439.jpg"
                      className="w-auto rounded-xl"
                      alt=""
                    />
                  </div>
                  <div className="border rounded-xl">
                    <img
                      src="https://cdn.nhathuoclongchau.com.vn/unsafe/375x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_05612_2244c1f439.jpg"
                      className="w-auto rounded-xl"
                      alt=""
                    />
                  </div>
                  <div className="border rounded-xl">
                    <img
                      src="https://cdn.nhathuoclongchau.com.vn/unsafe/375x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_05612_2244c1f439.jpg"
                      className="w-auto rounded-xl"
                      alt=""
                    />
                  </div>
                  <div className="border rounded-xl">
                    <img
                      src="https://cdn.nhathuoclongchau.com.vn/unsafe/375x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_05612_2244c1f439.jpg"
                      className="w-auto rounded-xl"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 p-6">
              <div>
                <span className="text-xl font-medium">
                  Thương hiệu:{" "}
                  <a className="text-green-600" href="">
                    Laroche posay
                  </a>
                </span>
                <h1 className="text-2xl font-semibold mt-3 mb-3">
                  Sữa chống nắng La Roche-Posay Anthelios Uvmune 400 dành cho da
                  dầu mụn (50ml)
                </h1>
                <div className="flex justify-start items-center gap-2 mb-3">
                  <p>5</p>
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                  <span className="mx-1.5 w-1 h-1 inline-block bg-gray-400 rounded-full"></span>
                  <p className="text-green-600">3 đánh giá</p>
                  <span className="mx-1.5 w-1 h-1 inline-block bg-gray-400 rounded-full"></span>
                  <p className="text-green-600">40 bình luận</p>
                </div>
                <div className="flex justify-start items-end text-green-600 mb-3">
                  <span className="text-4xl font-semibold">450.000 </span>
                  <span className="text-2xl">/ Hộp</span>
                </div>
                <div>
                  <table className="table-auto w-full">
                    <tbody>
                      <tr className="w-full flex flex-wrap mb-4 text-lg">
                        <td className="w-full md:w-5/12 text-gray-600">
                          Chọn đơn vị
                        </td>
                        <td className="w-full md:w-7/12">
                          <div
                            className="inline-flex justify-center items-center rounded-[50px] ring-offset-background relative font-medium text-text-primary overflow-hidden cursor-pointer h-9 text-label1 transition-all duration-300 border-green-700 border border-solid bg-white pl-4 pr-6"
                            data-test="unit_lv1"
                          >
                            Hộp
                            <div className="w-[0px] h-[0px] top-[6px] right-[10px] border-t-[26px] border-l-[26px] border-solid border-l-transparent border-t-green-700 -mt-[6px] -mr-[12px] absolute">
                              <span className="absolute -top-[22px] right-[3px]">
                                <svg
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="10"
                                  height="10"
                                  className="text-white"
                                >
                                  <path
                                    d="M8.5 16.5858L4.70711 12.7929C4.31658 12.4024 3.68342 12.4024 3.29289 12.7929C2.90237 13.1834 2.90237 13.8166 3.29289 14.2071L7.79289 18.7071C8.18342 19.0976 8.81658 19.0976 9.20711 18.7071L20.2071 7.70711C20.5976 7.31658 20.5976 6.68342 20.2071 6.29289C19.8166 5.90237 19.1834 5.90237 18.7929 6.29289L8.5 16.5858Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="w-full flex flex-wrap mb-4 text-lg">
                        <td className="w-full md:w-5/12 text-gray-600">
                          Danh mục
                        </td>
                        <td className="w-full md:w-7/12 text-green-600">
                          Kem chống nắng da mặt
                        </td>
                      </tr>
                      <tr className="w-full flex flex-wrap mb-4 text-lg">
                        <td className="w-full md:w-5/12 text-gray-600">
                          Quy cách
                        </td>
                        <td className="w-full md:w-7/12">Hộp x 50ml</td>
                      </tr>
                      <tr className="w-full flex flex-wrap mb-4 text-lg">
                        <td className="w-full md:w-5/12 text-gray-600">
                          Xuất xứ thương hiệu
                        </td>
                        <td className="w-full md:w-7/12">Pháp</td>
                      </tr>
                      <tr className="w-full flex flex-wrap mb-4 text-lg">
                        <td className="w-full md:w-5/12 text-gray-600">
                          Chỉ số chống nắng
                        </td>
                        <td className="w-full md:w-7/12">SPF 50+</td>
                      </tr>
                      <tr className="w-full flex flex-wrap mb-4 text-lg">
                        <td className="w-full md:w-5/12 text-gray-600">
                          Mô tả ngắn
                        </td>
                        <td className="w-full md:w-7/12">
                          Sữa chống nắng La Roche-Posay Dermatologique Anthelios
                          UVMune400 Oil Control Fluid 50ml là sản phẩm sữa chống
                          nắng lỏng nhẹ có chỉ số chống nắng SPF50+, PA++++ và
                          màng lọc Mexory 400 giúp bảo vệ da trước tác hại của
                          tia UVB, UVA (bước sóng dài 380 - 400 nm), nguyên nhân
                          chính gây thâm nám. Sản phẩm giúp giảm bóng nhờn và
                          tạo hiệu ứng lì 12 giờ với kết cấu sản phẩm khô
                          thoáng, không gây bết dính, không để lại vệt trắng.
                          Không chứa hương liệu, không paraben.
                        </td>
                      </tr>
                      <tr className="w-full flex flex-wrap mb-4 text-lg">
                        <td className="w-full md:w-5/12 text-gray-600">
                          Nhà sản xuất
                        </td>
                        <td className="w-full md:w-7/12">
                          CAP - Etablissement de La Roche Posay
                        </td>
                      </tr>
                      <tr className="w-full flex flex-wrap mb-4 text-lg">
                        <td className="w-full md:w-5/12 text-gray-600">
                          Nước sản xuất
                        </td>
                        <td className="w-full md:w-7/12">Pháp</td>
                      </tr>
                      <tr className="w-full flex flex-wrap mb-4 text-lg">
                        <td className="w-full md:w-5/12 text-gray-600">
                          Chọn số lượng
                        </td>
                        <td className="w-full md:w-7/12">
                          <div className="w-full md:w-1/3 flex justify-center items-center border rounded-2xl">
                            <span className="p-2 w-1/3 flex justify-center items-center border-r rounded-l-2xl text-gray-600 text-sm">
                              <FontAwesomeIcon icon={faMinus} />
                            </span>
                            <input
                              type="number"
                              className="text-center w-1/3"
                              min="1"
                              max="999"
                              value="1"
                            />
                            <span className="p-2 w-1/3 flex justify-center items-center border-l rounded-r-2xl text-gray-600 text-sm">
                              <FontAwesomeIcon icon={faPlus} />
                            </span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <button className="bg-green-600 py-3 w-1/2 text-xl text-white p-3 rounded-full font-medium">
                    Chọn mua
                  </button>
                  <button className="bg-green-100 py-3 w-1/2 text-xl text-green-600 p-3 rounded-full ml-3 font-medium">
                    Tìm nhà thuốc
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 bg-white rounded-xl mb-8">
            <div className="hidden md:block md:col-span-3 p-3">
              <ul className="divide-y" id="product_describe">
                <li
                  className={`py-3 text-center cursor-pointer rounded-lg text-lg font-medium ${
                    activeId === "describe" ? "bg-gray-300" : ""
                  }`}
                  onClick={() => handleNavClick("describe")}
                >
                  Mô tả
                </li>
                <li
                  className={`py-3 text-center cursor-pointer rounded-lg text-lg font-medium ${
                    activeId === "use" ? "bg-gray-300" : ""
                  }`}
                  onClick={() => handleNavClick("use")}
                >
                  Công dụng
                </li>
                <li
                  className={`py-3 text-center cursor-pointer rounded-lg text-lg font-medium ${
                    activeId === "preserve" ? "bg-gray-300" : ""
                  }`}
                  onClick={() => handleNavClick("preserve")}
                >
                  Bảo quản
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-9 p-3">
              <div className="text-xl font-semibold pb-3 border-b">
                Sữa chống nắng La Roche-Posay Anthelios Uvmune 400 dành cho da
                dầu mụn (50ml)
              </div>
              <div id="describe" className="mb-3">
                <p className="text-xl font-semibold mb-2">Mô tả sản phẩm</p>
                <p className="text-lg">
                  Anthelios UVMUNE 400 là sản phẩm chống nắng mới nhất của
                  thương hiệu La Roche Posay với màng lọc độc quyền Mexoryl 400
                  giúp bảo vệ da trước tác hại của tia UVB, UVA và công nghệ
                  Netlock giúp bảo vệ da khỏi “thủ phạm tiềm ẩn” hình thành các
                  gốc thâm nám nằm sâu dưới da. Chất kem lỏng nhẹ, thích hợp cho
                  làn da dầu mụn. Tia UV trong ánh nắng mặt trời đủ mạnh để tác
                  động đến làn da, khiến da bị sần sùi, đen sạm,... dù đã được
                  che chắn kỹ lưỡng. Do đó, việc sử dụng kem chống nắng sẽ giúp
                  bạn ngăn được sự ảnh hưởng của các tia UV, UVA. Sử dụng kem
                  chống nắng còn giúp ngăn quá trình lão hóa da đến sớm và làm
                  cho da luôn trẻ trung, tràn đầy sức sống. Thương hiệu mỹ phẩm
                  La Roche-Posay đến từ Pháp mang cho làn da dầu mụn một giải
                  pháp tối ưu đó là sản phẩm chống nắng La Roche-Posay Anthelios
                  UVMune 400 có khả năng bảo vệ da toàn diện và tăng cường độ ẩm
                  cần thiết cho da. Với kết cấu dạng sữa lỏng nhẹ, La
                  Roche-Posay Anthelios UVMune 400 giảm bóng nhờ, cho cảm giác
                  thoải mái khi sử dụng. Với công nghệ màng lọc chống nắng độc
                  quyền, La Roche-Posay Anthelios UVMune 400 giúp ngăn ngừa nám
                  sạm, lão hóa hiệu quả.
                </p>
                <div className="flex justify-center items-center py-5">
                  <img
                    src="https://cdn.nhathuoclongchau.com.vn/unsafe/375x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_05612_2244c1f439.jpg"
                    className="w-2/3"
                    alt=""
                  />
                </div>
              </div>
              <div id="use" className="mb-3">
                <p className="text-xl font-semibold mb-2">
                  Cách dùng Sữa chống nắng La Roche-Posay Anthelios Uvmune
                </p>
                <p className="text-lg">
                  Lắc đều trước khi sử dụng. Thoa sản phẩm trước khi tiếp xúc
                  với ánh nắng 20 phút. Lấy một lượng vừa đủ và chấm 5 điểm trên
                  mặt (trán, mũi, cằm và hai bên má) sau đó thoa theo chiều từ
                  trong ra ngoài và trên xuống dưới.
                </p>
              </div>
              <div id="preserve" className="mb-3">
                <p className="text-xl font-semibold mb-2">Bảo quản</p>
                <p className="text-lg">
                  Bảo quản ở nhiệt độ phòng, tránh ánh sáng trực tiếp, tránh xa
                  tầm với trẻ em.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white px-4 rounded-xl ">
            <div className="">
              <p className="text-xl font-bold border-b py-3">
                Đánh giá sản phẩm
              </p>
            </div>
            <div className="flex justify-between items-center py-3">
              <p className="text-lg font-medium text-gray-500 flex justify-start items-center gap-4">
                Trung bình{" "}
                <p className="text-2xl text-black">
                  5{" "}
                  <FontAwesomeIcon
                    className="text-yellow-500 text-lg"
                    icon={faStar}
                  />
                </p>
              </p>
              <button className="rounded-lg py-3 px-10 bg-green-600 text-lg text-white">
                Đánh giá
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
