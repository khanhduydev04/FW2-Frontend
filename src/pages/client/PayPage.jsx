import { faChevronLeft, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const PayPage = () => {
  return (
    <div className="bg-gray-100">
      <div className="container py-4">
        <div className="flex justify-start items-center gap-3 text-green-600">
          <Link>
            <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
          </Link>
          <p>Quay lại giỏ hàng</p>
        </div>
        <p className='my-4 font-medium'>Danh sách sản phẩm</p>
        <div className="flex justify-between gap-6 relative">
          <div className="w-2/3">
            <div className="flex justify-between gap-4 bg-white p-4 rounded-xl">
              <img src="https://cdn.nhathuoclongchau.com.vn/unsafe/375x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09530_0dfec4805c.jpg" className='w-14 h-14 p-1 rounded-xl border-[1px]' alt="" />
              <p className=''>
                Sáp dưỡng ẩm Vaseline Rosy Lotus Fobelife làm mềm da, làm dịu da khi bị khô rát, nứt nẻ, dưỡng môi (7g)
              </p>
              <div className="flex justify-end items-center gap-14 w-1/3">
                <strong>35.000đ</strong>
                <p>x1</p>
              </div>
            </div>
            <div className="bg-white p-4 mt-4">
              <div className="flex justify-start items-center gap-4 mb-4">
                <FontAwesomeIcon className="text-xl text-green-600" icon={faUser}></FontAwesomeIcon>
                <p className='font-medium'>Thông tin người đặt</p>
              </div>
              <form action="">
                <div className="flex justify-center gap-4 mb-3">
                  <div className="w-1/2">
                    <input type="text" id='name' className='w-full h-14 border-[1px] border-gray-300 rounded-md mt-1 ps-4' placeholder='Họ và tên người đặt' />
                  </div>
                  <div className="w-1/2">
                    <input type="text" id='numberphone' className='w-full h-14 border-[1px] border-gray-300 rounded-md mt-1 ps-4' placeholder='Số điện thoại' />
                  </div>
                </div>
                <div className="w-full">
                  <input type="text" id='email' className='w-full h-14 border-[1px] border-gray-300 rounded-md mt-1 ps-4' placeholder='Email (không bắt buộc)' />
                </div>
              </form>

              <div className="flex justify-start items-center gap-4 my-4">
                <FontAwesomeIcon className="text-xl text-green-600" icon={faUser}></FontAwesomeIcon>
                <p className='font-medium'>Thông tin người nhận</p>
              </div>
              <form action="">
                <div className="flex justify-center gap-4 mb-3">
                  <div className="w-1/2">
                    <input type="text" id='name' className='w-full h-14 border-[1px] border-gray-300 rounded-md mt-1 ps-4 !focus:border-gray-300' placeholder='Họ và tên người nhận' />
                  </div>
                  <div className="w-1/2">
                    <input type="text" id='phone' className='w-full h-14 border-[1px] border-gray-300 rounded-md mt-1 ps-4 !focus:border-gray-300' placeholder='Số điện thoại' />
                  </div>
                </div>
                <select id="country" name="country" autocomplete="country-name" className="w-full h-14 border-[1px] border-gray-300 rounded-md mt-1 ps-4 !focus:border-gray-300 pe-4 mb-3" >
                  <option value="1">Chọn Tỉnh/Thành phố</option>
                  <option value="2">Canada</option>
                  <option value="3">Mexico</option>
                </select>
                <div className="w-full">
                  <input type="text" id='name' className='w-full h-14 border-[1px] border-gray-300 rounded-md mt-1 ps-4 mb-3' placeholder='Nhập địa chỉ cụ thể' />
                </div>
                <div className="w-full">
                  <input type="text" id='name' className='w-full h-14 border-[1px] border-gray-300 rounded-md mt-1 ps-4 mb-3' placeholder='Ghi chú' />
                </div>
              </form>
            </div>
          </div>
          <div className="w-1/3">
            <div className="sticky top-2.5">
              <div className="bg-white p-4 rounded-t-xl">
                <div class="w-full">
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center">
                      <span class="text-gray-700">Tổng tiền</span>
                    </div>
                    <div class="font-medium ">35.000đ</div>
                  </div>
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center">
                      <span class="text-gray-700">Giảm giá</span>
                    </div>
                    <div class="font-medium text-yellow-500">0đ</div>
                  </div>
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center">
                      <span class="text-gray-700">Phí vận chuyển</span>
                    </div>
                    <div class="font-medium text-green-600">Miễn phí</div>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-gray-300"></div>
                <div className="flex justify-between items-center font-medium my-3">
                  <p className='text-lg'>Thành tiền</p>
                  <p className='text-green-600 text-xl'>35.000 đ</p>
                </div>
                <button className='w-full h-12 bg-green-600 rounded-full text-white font-medium'>Hoàn thành</button>
              </div>
              <div
                style={{
                  height: '24px',
                  background: 'white',
                  mask: 'radial-gradient(11.52px at 50% calc(100% - 15.45px), rgb(0, 0, 0) 99%, rgba(0, 0, 0, 0) 101%) calc(50% - 20.6px) 0px / 41.2px 100%, radial-gradient(11.52px at 50% calc(100% + 5.15px), rgba(0, 0, 0, 0) 99%, rgb(0, 0, 0) 101%) 50% calc(100% - 10.3px) / 41.2px 100% repeat-x'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PayPage