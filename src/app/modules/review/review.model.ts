import { Schema, model } from "mongoose";
import { IReview } from "./review.interface";

const ReviewSchema: Schema = new Schema({
  productID: { type: String, required: true },
  review: { type: String, required: true },
  userEmail: { type: String, required: true },
});

export const Review = model<IReview>("review", ReviewSchema);

export default Review;
