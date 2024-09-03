import { Router } from "express";
import { createPayment } from "./paymentController";
import { protect } from "../../middlewares/authMiddleware";

const route = Router();

route.post("/create-payment-intent", protect, createPayment);
export const PaymentRouter = route;
