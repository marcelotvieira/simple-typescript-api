import getAll from '../models/order.model';

const getAllOrders = async (): Promise<object> => {
  const orders: object = await getAll();
  return orders;
};

export default getAllOrders;