export const getCartByUser = async (axiosInstance) => {
  try {
    const res = await axiosInstance.get("/users/cart");
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const addToCart = async (axiosInstance, { product_id, quantity }) => {
  try {
    const res = await axiosInstance.post("/carts", {
      product_id,
      quantity,
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateCart = async (
  axiosInstance,
  { cart_id, quantity, item_id }
) => {
  try {
    const res = await axiosInstance.patch("/carts/" + cart_id, {
      item_id,
      quantity,
    });
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteCart = async (axiosInstance, { cart_id, item_id }) => {
  try {
    const res = await axiosInstance.delete(
      "/carts/" + cart_id + "/items/" + item_id
    );
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
