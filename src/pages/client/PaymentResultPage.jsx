import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {updatePaymentStatusOrder} from "../../services/order";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";


const PaymentResultPage = () => {
    const axiosInstanceWithAuth = useAxiosPrivate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [info, setInfo] = useState({});
    function formatDateTime(dateString) {
        if (!dateString) return "";
        const year = dateString.substring(0, 4);
        const month = dateString.substring(4, 6);
        const day = dateString.substring(6, 8);
        const hours = dateString.substring(8, 10);
        const minutes = dateString.substring(10, 12);
        const seconds = dateString.substring(12, 14);
        return `${hours}:${minutes}:${seconds} ${day}-${month}-${year}`;
    }
    const updateStatusOrder = async (id) => {
        try {
            const res = await updatePaymentStatusOrder(axiosInstanceWithAuth, id);
            if (res) {
                console.log("cập nhật thành công");
            }
        } catch (error) {
            console.log("cập nhật thất bại");
        }
    };
    useEffect(() => {
        const data = {
            order_id: searchParams.get("order_id"),
            vnp_Amount: searchParams.get("vnp_Amount"),
            vnp_BankCode: searchParams.get("vnp_BankCode"),
            vnp_BankTranNo: searchParams.get("vnp_BankTranNo"),
            vnp_OrderInfo: searchParams.get("vnp_OrderInfo"),
            vnp_PayDate: searchParams.get("vnp_PayDate"),
            vnp_ResponseCode: searchParams.get("vnp_ResponseCode"),
            vnp_TransactionNo: searchParams.get("vnp_TransactionNo"),
            vnp_TransactionStatus: searchParams.get("vnp_TransactionStatus"),
            vnp_TxnRef: searchParams.get("vnp_TxnRef"),
        };
        setInfo(data);
        updateStatusOrder(data.vnp_TxnRef);
    }, []);
    return (
        <div className="">
            <h2 className="text-center">VNPAY RESPONSE</h2>
            <table className="table mx-auto mt-3">
                <tbody className="text-left">
                    <tr>
                        <th>Mã đơn hàng</th>
                        <td className="pl-10">{String(info.vnp_TxnRef)}</td>
                    </tr>
                    <tr>
                        <th>Số tiền</th>
                        <td className="pl-10">{String(info.vnp_Amount / 100)}</td>
                    </tr>
                    <tr>
                        <th>Nội dung thanh toán:</th>
                        <td className="pl-10">{String(info.vnp_OrderInfo)}</td>
                    </tr>
                    <tr>
                        <th>Mã phản hồi</th>
                        <td className="pl-10">{String(info.vnp_ResponseCode)}</td>
                    </tr>
                    <tr>
                        <th>Mã GD Tại VNPAY:</th>
                        <td className="pl-10">{String(info.vnp_TransactionNo)}</td>
                    </tr>
                    <tr>
                        <th>Mã Ngân hàng:</th>
                        <td className="pl-10">{String(info.vnp_BankCode)}</td>
                    </tr>
                    <tr>
                        <th>Thời gian thanh toán:</th>
                        <td className="pl-10">{formatDateTime(info.vnp_PayDate)}</td>
                    </tr>
                    <tr>
                        <th>Kết quả:</th>
                        <td className="pl-10">
                            {info.vnp_ResponseCode == "00" ? (
                                <span className="text-green-500 font-bold">Giao dịch thành công</span>
                            ) : (
                                <span className="text-red-500 font-bold">Giao dịch thất bại</span>
                            )}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PaymentResultPage;
