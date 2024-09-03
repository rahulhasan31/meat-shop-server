import express from "express";
import cors from "cors";
import { ProductsRouter } from "./app/modules/products/product.router";
import { OrderRouter } from "./app/modules/Order/order.route";
import { AuthRouter } from "./app/modules/user/user.route";
import { ReviewRouter } from "./app/modules/review/review.route";
import { PaymentRouter } from "./app/modules/payment/paymentRoutes";

const app = express();

//persar
app.use(express.json());
app.use(cors());
app.use("/api/v1/product", ProductsRouter);
app.use("/api/v1/order", OrderRouter);
app.use("/api/v1/auth", AuthRouter);
app.use("/api/v1/review", ReviewRouter);
app.use("/api/v1/pay", PaymentRouter);

export default app;
