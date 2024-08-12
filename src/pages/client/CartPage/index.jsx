import { Link } from "react-router-dom";
import { CartItem } from "../../../components/Cart";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { useEffect, useState } from "react";
import { getTokens } from "../../../utils/auth";
import { deleteCart, getCartByUser } from "../../../services/cart";
import { toast } from "react-toastify";
import { calculateTotals, formatCurrency } from "../../../utils/common";

const CartPage = () => {
  const axiosInstanceWithAuth = useAxiosPrivate();
  const [carts, setCarts] = useState([]);
  const [cartId, setCartId] = useState(null);
  const { accessToken, refreshToken } = getTokens();

  const fetchCart = async () => {
    if (accessToken && refreshToken) {
      const res = await getCartByUser(axiosInstanceWithAuth);
      setCartId(res.data._id);
      setCarts(res.data.items);
    }
  };

  const handleDeleteItem = async (itemId) => {
    const data = {
      cart_id: cartId,
      item_id: itemId,
    };
    await deleteCart(axiosInstanceWithAuth, data);
    setCarts(carts.filter((item) => item._id !== itemId));
    toast.success("Xóa sản phẩm thành công");
  };

  const handleQuantityUpdate = async () => {
    await fetchCart();
  };

  const { totalAmount, totalDiscount, totalAfterDiscount } =
    calculateTotals(carts);

  useEffect(() => {
    fetchCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-neutral-100">
      <div className="container mx-auto py-6">
        {!accessToken && !refreshToken ? (
          <div className="p-3 rounded-lg bg-white w-1/3 mx-auto flex flex-col items-center">
            <p className="font-medium text-lg mb-3">
              Vui lòng đăng nhập để xem giỏ hàng
            </p>
            <Link
              to={"/tai-khoan/dang-nhap"}
              className="p-2 text-white bg-green-600 text-center font-medium rounded-md"
            >
              Đăng nhập
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-4 relative items-start">
            <div className="col-span-3 bg-white p-4 rounded-md">
              <h1 className="text-base font-semibold text-neutral-900 md:text-2xl md:font-bold">
                Giỏ hàng ({carts?.length})
              </h1>
              <table className="mt-8 w-full table-auto">
                <thead className="border border-t-0 border-l-0 border-r-0 border-b-neutral-300">
                  <tr>
                    <th>
                      <p className="leading-4 text-neutral-400 font-normal text-left py-4">
                        Sản phẩm
                      </p>
                    </th>
                    <th>
                      <p className="leading-4 text-neutral-400 font-normal">
                        Đơn giá
                      </p>
                    </th>
                    <th>
                      <p className="leading-4 text-neutral-400 font-normal">
                        Số lượng
                      </p>
                    </th>
                    <th>
                      <p className="leading-4 text-neutral-400 font-normal">
                        Thành tiền
                      </p>
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {carts.length > 0 &&
                    carts?.map((item, index) => {
                      return (
                        <CartItem
                          product_id={item.product_id}
                          quantity={item.quantity}
                          cartId={cartId}
                          itemId={item._id}
                          onDeleteItem={handleDeleteItem}
                          onQuantityUpdate={handleQuantityUpdate}
                          key={index}
                        />
                      );
                    })}
                </tbody>
              </table>
            </div>
            <div className="sticky top-10">
              <div className="bg-white p-4 rounded-md mb-3">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Khuyến mãi</div>
                  <button className="text-green-400 text-sm">Chọn mã</button>
                </div>
              </div>
              <div className="bg-white p-4 rounded-md">
                <div className="flex items-center justify-between mb-2">
                  <div className="">Tổng tiền</div>
                  <div className="font-medium">
                    {totalAmount > 0
                      ? formatCurrency(totalAmount)
                      : formatCurrency(0)}
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <div className="">Giảm giá</div>
                  <div className="font-medium">
                    -{" "}
                    {totalDiscount > 0
                      ? formatCurrency(totalDiscount)
                      : formatCurrency(0)}
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <div className="">Tiết kiệm được</div>
                  <div className="font-medium">
                    {totalDiscount > 0
                      ? formatCurrency(totalDiscount)
                      : formatCurrency(0)}
                  </div>
                </div>
                <div className="bg-neutral-300 h-[1px] my-3"></div>
                <div className="flex items-center justify-between mb-3">
                  <div className="font-medium">Thành tiền</div>
                  <div className="font-bold text-2xl text-red-500">
                    {totalAfterDiscount > 0
                      ? formatCurrency(totalAfterDiscount)
                      : formatCurrency(0)}
                  </div>
                </div>
                <Link to={"/thanh-toan"}>
                  <button className="bg-green-700 hover:bg-green-500 rounded-md w-full py-3 font-medium text-white">
                    Mua hàng
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
