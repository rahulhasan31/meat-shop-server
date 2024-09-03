import { Request, Response } from "express";
import { OrderService } from "./order.service";
import { orderSchemaZod } from "./order.validation";

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const orderValidate = orderSchemaZod.parse(order);
    const result = await OrderService.createOrder(orderValidate);
    res.status(200).json({
      success: true,
      message: "Order Create Succesfull",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Somthing wrong show error",
      data: err,
    });
  }
};
const getUserOrder = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const result = await OrderService.getUserOrder(id);
    res.status(200).json({
      success: true,
      message: "Get user Order  Succesfull",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Somthing wrong show error",
      data: err,
    });
  }
};
const allOrder = async (req: Request, res: Response) => {
  try {
    const result = await OrderService.allOrder();
    res.status(200).json({
      success: true,
      message: "Get All Order  Succesfull",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Somthing wrong show error",
      data: err,
    });
  }
};
const payStatusUpdate = async (req: Request, res: Response) => {
  try {
    const { _id, paymentStatus } = req.body;

    const result = await OrderService.payStatusUpdate(_id, paymentStatus);
    res.status(200).json({
      success: true,
      message: " user Order Update  Succesfull",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Somthing wrong show error",
      data: err,
    });
  }
};

export const OrderController = {
  createOrder,
  getUserOrder,
  payStatusUpdate,
  allOrder
};
