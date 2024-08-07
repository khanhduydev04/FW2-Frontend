import { faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
// flex justify-center gap-4
   
const CommentItem = ({className, avatar, Username, message, Replyname, time, like}) => {
  return (
    <>
      <div className={className}>
        <div style={{ zIndex: '1' }}>
          <img src={avatar} alt="" className='w-[50px] rounded-full' />
        </div>
        <div className="">
          <p className='font-bold text-gray-600'>{Username}</p>
          <div className="">
            <span> Chào bạn {Replyname},</span>
            <p>{message}</p>
            <p>Thân mến!</p>
          </div>
          <div className="flex justify-start items-center gap-6 font-medium text-gray-600">
            <p>{time}</p>
            <div className="flex justify-center items-center gap-2">

              <FontAwesomeIcon icon={faThumbsUp} />
              Hữu ích
            </div>
            <button className='text-green-600'>Trả lời</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommentItem