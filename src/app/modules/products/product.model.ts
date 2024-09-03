import { Schema, model } from "mongoose";

import { IProducts } from "./product.interface";

// 2. Create a Schema corresponding to the document interface.
const productSchema = new Schema<IProducts>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
    trim: true,
  },
  imgUrlOne: {
    type: String,
    required: true,
    trim: true,
  },
  imgUrlTwo: {
    type: String,
    required: true,
    trim: true,
  },
  productDetails: {
    type: String,
    required: true,
    trim: true,
  },
});

// 3. Create a Model.
export const Product = model<IProducts>("product", productSchema);
