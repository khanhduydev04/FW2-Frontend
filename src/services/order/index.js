export const createOrder = async (axiosInstanceWithAuth, orderData) => {
  try {
    const res = await axiosInstanceWithAuth.post("/orders", orderData);
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getOrders = async (axiosInstanceWithAuth) => {
  try {
    const res = await axiosInstanceWithAuth.get("/orders");
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getOrderById = async (axiosInstanceWithAuth, id) => {
  try {
    const res = await axiosInstanceWithAuth.get(`/orders/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updatePaymentStatusOrder = async (axiosInstanceWithAuth, id) => {
  try {
    const res = await axiosInstanceWithAuth.patch(`users/orders/${id}`, {paymentStatus: 'paid'});
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};