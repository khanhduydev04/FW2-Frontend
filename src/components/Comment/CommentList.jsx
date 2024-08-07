import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const CommentList = () => {
  return (
    <>
      <>
        <div className="flex justify-center gap-4 relative">
          <div className="w-[2px] h-full bg-gray-200 absolute left-[20px] top-0"></div>
          <div className='flex justify-center gap-4'>
            <div style={{ zIndex: '1' }}>
              <img src="https://nhathuoclongchau.com.vn/static/images/avatar-moderator.svg" alt="" className='w-[50px] rounded-full' />
            </div>
            <div className="">
              <p className='font-bold text-gray-600'>Ho Du Mai Tran</p>
              <div className="">
                <span> Chào bạn Thu Vân,</span>
                <p>Dạ rất cảm ơn tình cảm của bạn dành cho nhà thuốc FPT Long châu. Bất cứ khi nào bạn cần hỗ trợ, vui lòng liên hệ tổng đài miễn phí 18006928 để được tư vấn và đặt hàng.</p>
                <p>Thân mến!</p>
              </div>
              <div className="flex justify-start items-center gap-6 font-medium text-gray-600">
                <p>8 tháng trước</p>
                <div className="flex justify-center items-center gap-2">
                  <FontAwesomeIcon icon={faThumbsUp} />
                  Hữu ích
                </div>
                <button className='text-green-600'>Trả lời</button>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex justify-center gap-4 relative ms-[20px] mt-[10px]">
            <div className="w-[2px] h-full bg-gray-200 absolute left-0 bottom-full"></div>
            <div className="w-[35px] h-[35px] border-l-2 border-b-2 absolute left-0 rounded-bl-lg"></div>
            <div className='ms-[50px] mt-[10px] flex justify-center gap-4'>
              <div>
                <img src="https://nhathuoclongchau.com.vn/static/images/avatar-moderator.svg" alt="" className='w-[50px] rounded-full' />
              </div>
              <div className="">
                <p className='font-bold text-gray-600'>Ho Du Mai Tran</p>
                <div className="">
                  <span> Chào bạn Thu Vân,</span>
                  <p>Dạ rất cảm ơn tình cảm của bạn dành cho nhà thuốc FPT Long châu. Bất cứ khi nào bạn cần hỗ trợ, vui lòng liên hệ tổng đài miễn phí 18006928 để được tư vấn và đặt hàng.</p>
                  <p>Thân mến!</p>
                </div>
                <div className="flex justify-start items-center gap-6 font-medium text-gray-600">
                  <p>8 tháng trước</p>
                  <div className="flex justify-center items-center gap-2">
                    <FontAwesomeIcon icon={faThumbsUp} />
                    Hữu ích
                  </div>
                  <button className='text-green-600'>Trả lời</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-4 relative ms-[20px] mt-[10px]">
            <div className="w-[2px] h-full bg-gray-200 absolute left-0 bottom-full"></div>
            <div className="w-[35px] h-[35px] border-l-2 border-b-2 absolute left-0 rounded-bl-lg"></div>
            <div className='ms-[50px] mt-[10px] flex justify-center gap-4'>
              <div>
                <img src="https://nhathuoclongchau.com.vn/static/images/avatar-moderator.svg" alt="" className='w-[50px] rounded-full' />
              </div>
              <div className="">
                <p className='font-bold text-gray-600'>Ho Du Mai Tran</p>
                <div className="">
                  <span> Chào bạn Thu Vân,</span>
                  <p>Dạ rất cảm ơn tình cảm của bạn dành cho nhà thuốc FPT Long châu. Bất cứ khi nào bạn cần hỗ trợ, vui lòng liên hệ tổng đài miễn phí 18006928 để được tư vấn và đặt hàng.</p>
                  <p>Thân mến!</p>
                </div>
                <div className="flex justify-start items-center gap-6 font-medium text-gray-600">
                  <p>8 tháng trước</p>
                  <div className="flex justify-center items-center gap-2">
                    <FontAwesomeIcon icon={faThumbsUp} />
                    Hữu ích
                  </div>
                  <button className='text-green-600'>Trả lời</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  )
}

export default CommentList