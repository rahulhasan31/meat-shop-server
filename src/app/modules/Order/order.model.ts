import { Schema, model } from "mongoose";
import { IOrder } from "./order.interface";

// Define the product sub-schema
const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  imgUrl: { type: String, required: true },
  imgUrlOne: { type: String, required: true },
  imgUrlTwo: { type: String, required: true },
  productDetails: { type: String, required: true },
});

// Define the order schema
const orderSchema = new Schema(
  {
    products: { type: [productSchema], required: true },
    paymentID: { type: String, required: true },
    paymentAmount: { type: Number, required: true },
    userName: { type: String, required: true },

    userEmail: { type: String, required: true },
    userID: { type: String, required: true },
    paymentStatus: { type: String, required: true },
  },
  { timestamps: true }
);

export const Order = model<IOrder>("order", orderSchema);
