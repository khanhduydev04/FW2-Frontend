const Footer = () => {
  return (
    <>
      <footer>
        <div className="container mx-auto px-10 pt-10 pb-3">
          <div className="grid grid-cols-12 border-b pb-3">
            <div className="col-span-12 md:col-span-3">
              <ul className="space-y-4 font-medium">
                <li className="text-gray-600">Về chúng tôi</li>
                <li className="text-blue-600">
                  <a href="#">Giới thiệu</a>
                </li>
                <li className="text-blue-600">
                  <a href="#">Hệ thống cửa hàng</a>
                </li>
                <li className="text-blue-600">
                  <a href="#">Giấy phép kinh doanh</a>
                </li>
                <li className="text-blue-600">
                  <a href="#">Chính sách đổi trả</a>
                </li>
                <li className="text-blue-600">
                  <a href="">Chính sách mua hàng</a>
                </li>
                <li className="text-blue-600">
                  <a href="#">Chính sách nội dung</a>
                </li>
                <li className="text-blue-600">
                  <a href="#">Chính sách thanh toán</a>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-3">
              <ul className="space-y-4 font-medium">
                <li className="text-gray-600">Về chúng tôi</li>
                <li className="text-blue-600">Giới thiệu</li>
                <li className="text-blue-600">Hệ thống cửa hàng</li>
                <li className="text-blue-600">Giấy phép kinh doanh</li>
                <li className="text-blue-600">Chính sách đổi trả</li>
                <li className="text-blue-600">Chính sách mua hàng</li>
                <li className="text-blue-600">Chính sách nội dung</li>
                <li className="text-blue-600">Chính sách thanh toán</li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-3">
              <ul className="space-y-4 font-medium">
                <li className="text-gray-600">Tổng đài</li>
                <li className="text-gray-600">
                  <p className="text-gray-700">Tư vấn mua hàng</p>
                  <span className="">
                    <span className="text-blue-600">0912022074 </span> (Nhánh 1)
                  </span>
                </li>
                <li className="text-gray-600">Chứng nhận bởi</li>
                <li className="flex justify-start items-center gap-3">
                  <img
                    src="https://cdn1.nhathuoclongchau.com.vn/bo_cong_thuong_a8e5750f57.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn1.nhathuoclongchau.com.vn/smalls/DMCA_1_1f84305343.svg"
                    alt=""
                  />
                </li>
                <li className="text-gray-600">Hỗ trợ thanh toán</li>
                <li className="flex justify-start items-center flex-wrap gap-2">
                  <a href="#">
                    <img
                      src="https://cdn1.nhathuoclongchau.com.vn/visa_fdc3324c35.svg"
                      alt=""
                      className="border rounded-[5px] p-1"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://cdn1.nhathuoclongchau.com.vn/mtc_1ed684ff7c.svg"
                      alt=""
                      className="border rounded-[5px] p-1"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://cdn1.nhathuoclongchau.com.vn/jcb_7655e615ce.svg"
                      alt=""
                      className="border rounded-[5px] p-1"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://cdn1.nhathuoclongchau.com.vn/amex_2610a984a5.svg"
                      alt=""
                      className="border rounded-[5px] p-1"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://cdn1.nhathuoclongchau.com.vn/smalls/vnpay_1f73f546c4.svg"
                      alt=""
                      className="border rounded-[5px] p-1"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://cdn1.nhathuoclongchau.com.vn/zalopay_884e503cf9.svg"
                      alt=""
                      className="border rounded-[5px] p-1"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://cdn1.nhathuoclongchau.com.vn/smalls/momo_ebbd8eb9b0.svg"
                      alt=""
                      className="border rounded-[5px] p-1"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-3">
              <ul className="space-y-4 font-medium">
                <li className="text-gray-600">Kết nối với chúng tôi</li>
                <li className="flex justify-start items-center gap-3">
                  <a href="#">
                    <img
                      src="https://cdn1.nhathuoclongchau.com.vn/smalls/facebook_logo_3152b9bb16.svg"
                      alt=""
                      className="w-7"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://cdn1.nhathuoclongchau.com.vn/smalls/Logo_Zalo_979d41d52b.svg"
                      alt=""
                      className="w-7"
                    />
                  </a>
                </li>
                <li className="text-gray-600">Tải ứng dụng</li>
                <li className="flex justify-start items-center gap-3">
                  <a href="#">
                    <img
                      src="https://cdn.nhathuoclongchau.com.vn/unsafe/100x100/https://cms-prod.s3-sgn09.fptcloud.com/smalls/QR_100x100_3x_1b3ed147f3.png"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-3 text-[16px] text-gray-500">
            <p>
              @2024 - Nhóm Human V2 - WD18305 - Địa chỉ: Cao đắng FPT
              Polytechnic Cần Thơ
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
