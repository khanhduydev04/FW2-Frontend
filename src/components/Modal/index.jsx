import React from 'react'

const Modal = ({ isShow, title, children, onClose }) => {
    return (
        <div className={`z-auto fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${!isShow ? `hidden` : ``}`}>
            <div className="bg-white rounded shadow-lg w-full mx-4 md:w-1/2">
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                    {title && <h3 className="text-lg font-semibold">{title}</h3>}
                    <button className="text-red-500" onClick={onClose}>Đóng</button>
                </div>
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal