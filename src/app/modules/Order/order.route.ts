import express from "express";
import { OrderController } from "./order.controller";
import { admin, protect } from "../../middlewares/authMiddleware";

const route = express.Router();

route.post("/create-order", protect, OrderController.createOrder);
route.get("/user-order/:id", protect, OrderController.getUserOrder);
route.get("/all-Order",protect, admin, OrderController.allOrder);
route.patch("/order-stutas", protect, admin, OrderController.payStatusUpdate);

export const OrderRouter = route;
