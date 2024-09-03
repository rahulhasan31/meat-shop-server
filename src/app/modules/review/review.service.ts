import { IReview } from "./review.interface";
import Review from "./review.model";

const createReview = async (review: IReview) => {
  const result = await Review.create(review);
  return result;
};

const getReview = async (Id: any) => {
  const result = await Review.find({ productID: Id });
  return result;
};
const allReview = async () => {
  const result = await Review.find();
  return result;
};

const getReviewByEmail = async (email: any) => {
  console.log(email);

  const result = await Review.find({ userEmail: email });
  return result;
};
const DeleteReviewByid = async (id: any) => {
  const result = await Review.findOneAndDelete({ _id: id });
  return result;
};
const UpdateReviewByid = async (id: any, data: any) => {
  const result = await Review.findByIdAndUpdate({ _id: id }, data);
  return result;
};

export const ReviewService = {
  createReview,
  getReview,
  getReviewByEmail,
  DeleteReviewByid,
  allReview,
  UpdateReviewByid,
};
