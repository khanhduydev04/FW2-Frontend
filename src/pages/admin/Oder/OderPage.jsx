import { useEffect, useState } from "react";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { getOrders, updateOrder } from "../../../services/order";
import { Link } from "react-router-dom";

const OderPage = () => {
  const axiosInstanceWithAuth = useAxiosPrivate();
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const res = await getOrders(axiosInstanceWithAuth);
    if (res) {
      setOrders(res.data);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleUpdateStatus = async (orderId, newStatus) => {
    try {
      const updatedOrder = await updateOrder(axiosInstanceWithAuth, orderId, { status: newStatus });
      if (updatedOrder) {
        // Update the local state to reflect the status change
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === orderId ? { ...order, status: newStatus } : order
          )
        );
      }
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  return (
    <main className="bg-white rounded-xl py-10 px-[66px]">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="relative h-[585px]">
          <div className="px-4">
            <div className="sm:flex sm:items-center">
              <div className="flex-auto">
                <h1 className="text-xl font-bold leading-6 text-gray-900">
                  Đơn hàng
                </h1>
                <p className="mt-2 text-sm text-gray-700">
                  Bảng danh sách bao gồm thông tin của tất cả các đơn hàng.
                </p>
              </div>
            </div>
            <div className="mt-4 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y-[1px] divide-gray-300 text-center">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-sm font-semibold text-gray-900"
                        >
                          Mã đơn hàng
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-sm font-semibold text-gray-900"
                        >
                          Tên người đặt
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-sm font-semibold text-gray-900"
                        >
                          Xem chi tiết
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-sm font-semibold text-gray-900"
                        >
                          Trạng thái
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {orders.length > 0 &&
                        orders
                          .filter((order) => order.status !== "cancelled") // Filter out cancelled orders
                          .map((order, index) => (
                            <tr
                              className="odd:bg-white even:bg-slate-50"
                              key={index}
                            >
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                {order._id}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                {order.recipient.fullname}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                <Link
                                  to={`/admin/quan-ly-don-hang/${order._id}`}
                                  className="text-green-600"
                                >
                                  Xem chi tiết
                                </Link>
                              </td>
                              <td className="py-4 pl-3 pr-4 flex justify-center gap-4 text-sm font-medium sm:pr-3 select-none">
                                {order.status === "approved" ? (
                                  <span className="text-gray-600">Đã duyệt</span>
                                ) : (
                                  <button
                                    className="text-green-600"
                                    onClick={() =>
                                      handleUpdateStatus(
                                        order._id,
                                        "approved"
                                      )
                                    }
                                  >
                                    Duyệt đơn
                                  </button>
                                )}
                                <button
                                  className="text-red-600"
                                  onClick={() =>
                                    handleUpdateStatus(
                                      order._id,
                                      "cancelled"
                                    )
                                  }
                                >
                                  Hủy
                                </button>
                              </td>
                            </tr>
                          ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OderPage;
