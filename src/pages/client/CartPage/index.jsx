import { Link } from "react-router-dom"
import CartItem from "./CartItem"

const CartPage = () => {
    const cartItems = [
        {
            id: 1,
            productName: 'Sản phẩm 1',
            price: 627000,
            salePrice: 376200,
            quantity: 2,
            unit: 'Hộp',
            image: 'https://prod-cdn.pharmacity.io/e-com/images/ecommerce/500x500/P24364_1_l.webp'
        }
    ]
    return (
        <div className="bg-neutral-100">
            <div className="container mx-auto py-6">
                <div className="grid grid-cols-4 gap-4 relative items-start">
                    <div className="col-span-3 bg-white p-4 rounded-md">
                        <h1 className="text-base font-semibold text-neutral-900 md:text-2xl md:font-bold">Giỏ hàng (1)</h1>
                        <table className="mt-8 w-full table-auto">
                            <thead className="border border-t-0 border-l-0 border-r-0 border-b-neutral-300">
                                <tr>
                                    <th>
                                        <div className="flex items-start">
                                            <input type="checkbox" name="" id="" />
                                        </div>
                                    </th>
                                    <th>
                                        <p className="leading-4 text-neutral-400 font-normal text-left py-4">Sản phẩm</p>
                                    </th>
                                    <th>
                                        <p className="leading-4 text-neutral-400 font-normal">Đơn giá</p>
                                    </th>
                                    <th>
                                        <p className="leading-4 text-neutral-400 font-normal">Số lượng</p>

                                    </th>
                                    <th>
                                        <p className="leading-4 text-neutral-400 font-normal">Thành tiền</p>
                                    </th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItems?.map((item, index) => {
                                        return (
                                            <CartItem key={index}
                                                id={item?.id}
                                                productName={item?.productName}
                                                price={item?.price}
                                                salePrice={item?.salePrice}
                                                quantity={item?.quantity}
                                                unit={item?.unit}
                                                image={item?.image}
                                            />
                                        )
                                    })
                                }

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
                                <div className="">Tạm tính</div>
                                <div className="font-medium">627.000 ₫</div>
                            </div>
                            <div className="flex items-center justify-between mb-2">
                                <div className="">Giảm giá</div>
                                <div className="font-medium">-</div>
                            </div>
                            <div className="flex items-center justify-between mb-2">
                                <div className="">Giảm giá sản phẩm</div>
                                <div className="font-medium">-250.800 ₫</div>
                            </div>
                            <div className="bg-neutral-300 h-[1px] my-3"></div>
                            <div className="flex items-center justify-between mb-3">
                                <div className="font-medium">Tổng tiền</div>
                                <div className="font-bold text-2xl text-red-500">376.200 ₫</div>
                            </div>
                            <Link to={'/thanh-toan'}>
                                <button className="bg-green-700 hover:bg-green-500 rounded-md w-full py-3 font-medium text-white">Mua hàng (1)</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage