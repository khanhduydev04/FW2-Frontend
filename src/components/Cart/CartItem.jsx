import PropTypes from "prop-types";
import { formatCurrency, useChangeQuantity } from "../../utils/common";
import { Link } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const CartItem = ({
  product_id,
  quantity,
  cartId,
  itemId,
  onDeleteItem,
  onQuantityUpdate,
}) => {
  const axiosInstanceWithAuth = useAxiosPrivate();
  const {
    localQuantity,
    handleIncrease,
    handleDecrease,
    handleBlur,
    handleChange,
    quantityRef,
  } = useChangeQuantity(
    quantity,
    product_id.quantity,
    axiosInstanceWithAuth,
    onQuantityUpdate
  );
  const totalPrice =
    product_id.discount > 0
      ? product_id.price * (1 - product_id.discount) * quantity
      : product_id.price * quantity;

  const handleDeleteCart = async () => {
    onDeleteItem(itemId);
  };

  const updateData = {
    cart_id: cartId,
    item_id: itemId,
  };

  return (
    <tr>
      <td className="py-4">
        <div className="flex items-center">
          <div>
            <img
              className="object-fit"
              src={product_id.images[0].url}
              alt={product_id.name}
              loading="lazy"
              width="66"
              height="66"
            />
          </div>
          <div className="ml-4 w-full">
            <Link to={`/san-pham/${product_id._id}`}>
              <p className="line-clamp-2 text-sm font-semibold text-neutral-90 text-ellipsis">
                {product_id.name}
              </p>
            </Link>
            <p className="text-sm text-neutral-700">Hộp</p>
          </div>
        </div>
      </td>
      <td>
        <div className="flex flex-col gap-y-1">
          {product_id.discount > 0 && (
            <p className="text-base line-through text-neutral-400">
              {formatCurrency(product_id.price)}
            </p>
          )}
          <p className="text-base font-semibold text-green-600">
            {product_id.discount > 0
              ? formatCurrency(
                  Number(product_id.price) * (1 - Number(product_id.discount))
                )
              : formatCurrency(product_id.price)}
          </p>
        </div>
      </td>
      <td>
        <div className="flex items-center justify-center gap-2">
          <button
            className="p-2 w-[24px] h-[24px] rounded-full flex items-center justify-center bg-neutral-300"
            onClick={() => handleDecrease(updateData)}
          >
            -
          </button>
          <input
            type="text"
            className="w-[40px] outline-none border-none text-center"
            ref={quantityRef}
            value={localQuantity}
            // defaultValue={1}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <button
            className="p-2 w-[24px] h-[24px] rounded-full flex items-center justify-center bg-neutral-300"
            onClick={() => handleIncrease(updateData)}
          >
            +
          </button>
        </div>
      </td>
      <td>
        <div className="text-center font-medium">
          {formatCurrency(totalPrice)}
        </div>
      </td>
      <td>
        <button
          data-size="sm"
          type="button"
          className="relative justify-center outline-none font-semibold focus:ring-primary-300 text-sm bg-transparent data-[size=sm]:text-sm text-inherit border-0 hover:bg-0 hover:text-primary-500 focus:text-primary-500 hidden h-6 p-0 md:mt-1 md:flex"
          onClick={handleDeleteCart}
        >
          <span className="p-icon inline-flex align-[-0.125em] justify-center max-h-full max-w-full w-6 h-6">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.4 5.03128H15.7333V4.49795C15.7333 3.61571 15.0156 2.89795 14.1333 2.89795H9.86668C8.98444 2.89795 8.26668 3.61571 8.26668 4.49795V5.03128H5.60001C4.71777 5.03128 4.00002 5.74904 4.00002 6.63128C4.00002 7.33983 4.46313 7.94189 5.10241 8.15167L6.0537 19.6352C6.12222 20.4579 6.82259 21.1024 7.64815 21.1024H16.3519C17.1775 21.1024 17.8778 20.4579 17.9464 19.635L18.8976 8.15163C19.5369 7.94189 20 7.33983 20 6.63128C20 5.74904 19.2822 5.03128 18.4 5.03128ZM9.33334 4.49795C9.33334 4.20387 9.5726 3.96461 9.86668 3.96461H14.1333C14.4274 3.96461 14.6667 4.20387 14.6667 4.49795V5.03128H9.33334V4.49795ZM16.8833 19.5467C16.8605 19.8209 16.6271 20.0357 16.3519 20.0357H7.64815C7.37299 20.0357 7.13953 19.8209 7.11674 19.5469L6.17936 8.23128H17.8207L16.8833 19.5467ZM18.4 7.16461H5.60001C5.30593 7.16461 5.06668 6.92536 5.06668 6.63128C5.06668 6.3372 5.30593 6.09795 5.60001 6.09795H18.4C18.6941 6.09795 18.9333 6.3372 18.9333 6.63128C18.9333 6.92536 18.6941 7.16461 18.4 7.16461Z"
                fill="currentColor"
              ></path>
              <path
                d="M9.86575 18.4026L9.33242 9.79821C9.31418 9.5042 9.0597 9.28059 8.76712 9.2989C8.47311 9.31714 8.24957 9.57022 8.26778 9.8642L8.80111 18.4687C8.81864 18.7514 9.05345 18.969 9.33291 18.969C9.64178 18.969 9.8847 18.7089 9.86575 18.4026Z"
                fill="currentColor"
              ></path>
              <path
                d="M12 9.29785C11.7055 9.29785 11.4667 9.53664 11.4667 9.83118V18.4356C11.4667 18.7302 11.7055 18.969 12 18.969C12.2946 18.969 12.5334 18.7302 12.5334 18.4356V9.83118C12.5334 9.53664 12.2946 9.29785 12 9.29785Z"
                fill="currentColor"
              ></path>
              <path
                d="M15.233 9.29889C14.9396 9.28065 14.6859 9.50419 14.6677 9.7982L14.1343 18.4026C14.1162 18.6966 14.3397 18.9497 14.6337 18.9679C14.9278 18.9861 15.1808 18.7625 15.199 18.4686L15.7323 9.86419C15.7505 9.57018 15.527 9.3171 15.233 9.29889Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </button>
      </td>
    </tr>
  );
};

CartItem.propTypes = {
  product_id: PropTypes.object,
  quantity: PropTypes.number,
  cartId: PropTypes.string,
  itemId: PropTypes.string,
  onDeleteItem: PropTypes.func,
  onQuantityUpdate: PropTypes.func,
};

export default CartItem;
