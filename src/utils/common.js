import { useRef, useState } from "react";
import { updateCart } from "../services/cart";

const formatCurrency = (value) => {
  if (value === undefined || value === null) {
    return "N/A"; // Hoặc một giá trị mặc định khác phù hợp
  }
  return value.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};

const useChangeQuantity = (
  initialQuantity,
  maxQuantity,
  axiosInstanceWithAuth,
  onQuantityUpdate
) => {
  const [localQuantity, setLocalQuantity] = useState(
    initialQuantity.toString()
  );
  const quantityRef = useRef(null);

  const update = async (data) => {
    await updateCart(axiosInstanceWithAuth, {
      cart_id: data.cart_id,
      item_id: data.item_id,
      quantity: data.quantity,
    });
    if (onQuantityUpdate) {
      onQuantityUpdate();
    }
  };

  const handleIncrease = async (data = null) => {
    let currentValue = parseInt(localQuantity, 10) || 1;
    if (currentValue < maxQuantity) {
      const newQuantity = currentValue + 1;
      setLocalQuantity(newQuantity.toString());
      if (axiosInstanceWithAuth && data) {
        update({
          ...data,
          quantity: newQuantity,
        });
      }
    }
  };

  const handleDecrease = (data = null) => {
    let currentValue = parseInt(localQuantity, 10) || 1;
    if (currentValue > 1) {
      const newQuantity = currentValue - 1;
      setLocalQuantity(newQuantity.toString());
      if (axiosInstanceWithAuth && data) {
        update({
          ...data,
          quantity: newQuantity,
        });
      }
    }
  };

  const handleChange = (e) => {
    setLocalQuantity(e.target.value);
  };

  const handleBlur = (data = null) => {
    let currentValue = parseInt(localQuantity, 10);
    if (isNaN(currentValue) || currentValue < 1) {
      setLocalQuantity("1");
    } else if (currentValue > maxQuantity) {
      setLocalQuantity(maxQuantity.toString());
    }
    if (axiosInstanceWithAuth && data) {
      update({
        ...data,
        quantity: currentValue,
      });
    }
  };

  return {
    localQuantity,
    handleIncrease,
    handleDecrease,
    handleBlur,
    handleChange,
    quantityRef,
  };
};

const calculateTotals = (carts) => {
  let totalAmount = 0;
  let totalDiscount = 0;
  let totalAfterDiscount = 0;

  carts.forEach((item) => {
    const price = item.product_id.price;
    const quantity = item.quantity;
    const discount = item.product_id.discount || 0;
    const itemTotal = price * quantity;
    const itemDiscount = itemTotal * discount;
    const itemTotalAfterDiscount = itemTotal - itemDiscount;

    totalAmount += itemTotal;
    totalDiscount += itemDiscount;
    totalAfterDiscount += itemTotalAfterDiscount;
  });

  return {
    totalAmount,
    totalDiscount,
    totalAfterDiscount,
  };
};

export { formatCurrency, useChangeQuantity, calculateTotals };
