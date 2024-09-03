import { IOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrder = async (order: IOrder) => {
  const result = await Order.create(order);
  return result;
};

const getUserOrder = async (id: string) => {
  const result = await Order.find({ userID: id });
  return result;
};

const payStatusUpdate = async (id: string, payload: string) => {
  const result = await Order.updateOne(
    { _id: id },
    { $set: { paymentStatus: payload } }
  );

  return result;
};

const allOrder=async()=>{
  const result= await Order.find()
  return result
}

export const OrderService = {
  createOrder,
  getUserOrder,
  payStatusUpdate,
  allOrder
};
