import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOrderById } from '../../../services/order';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';

const OderDetailPage = () => {
    const axiosInstanceWithAuth = useAxiosPrivate();
    const id = useParams().id;
    const [orderDetail, setOrderDetail] = useState({});
    const fetchOrder = async () => {
        const res = await getOrderById(axiosInstanceWithAuth, id);
        if (res) {
            setOrderDetail(res.data);
        }
    }

    useEffect(() => {
        fetchOrder();
        console.log(orderDetail);

    }, []);

    return (
        <div className='bg-white rounded-lg shadow-sm py-4'>
            <p className='text-center text-xl font-medium mb-3 text-green-600'>Chi tiết đơn hàng</p>
            <div className="w-full flex justify-center items-center">
                {orderDetail && orderDetail.items && orderDetail.items.length > 0 && (
                    <table>
                        <tbody>
                            <tr className='flex justify-start mb-3 gap-5 items-start'>
                                <td className='w-40 font-bold'>Mã đơn</td>
                                <td>{orderDetail._id}</td>
                            </tr>
                            <tr className='flex justify-start mb-3 gap-5 items-start'>
                                <td className='w-40 font-bold'>Người đặt</td>
                                <td>{orderDetail.recipient.fullname}</td>
                            </tr>
                            <tr className='flex justify-start mb-3 gap-5 items-start'>
                                <td className='w-40 font-bold'>Số điện thoại</td>
                                <td>{orderDetail.recipient.phone}</td>
                            </tr>
                            <tr className='flex justify-start mb-3 gap-5 items-start'>
                                <td className='w-40 font-bold'>Địa chỉ</td>
                                <td>{orderDetail.recipient.ward} - {orderDetail.recipient.ward} - {orderDetail.recipient.ward}</td>
                            </tr>
                            <tr className='flex justify-start mb-3 gap-5 items-start'>
                                <td className='w-40 font-bold'>Ngày đặt</td>
                                <td>{orderDetail.createdAt}</td>
                            </tr>
                            <tr className='flex justify-start mb-3 gap-5 items-start'>
                                <td className='w-40 font-bold'>Tổng tiền</td>
                                <td>{orderDetail.totalAmount}</td>
                            </tr>
                            <tr className='flex justify-start mb-3 gap-5 items-start'>
                                <td className='w-40 font-bold'>Trạng thái</td>
                                <td>{orderDetail.status}</td>
                            </tr>
                            <tr className='flex justify-start mb-3 gap-5 items-start'>
                                <td className='w-40 font-bold'>Sản phẩm</td>
                                <td>
                                    {orderDetail.items.map((item) => (
                                        <div key={item.productId._id} className='border-b'>
                                            <p>{item.productId.name}</p>
                                            <p>Số lượng: {item.quantity}</p>
                                            <p>Giá: {item.price}</p>
                                        </div>
                                    ))}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                )}


            </div>
        </div>
    )
}

export default OderDetailPage