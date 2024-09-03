import express from "express";

import { admin, protect } from "../../middlewares/authMiddleware";
import { ReviewController } from "./review.controller";

const route = express.Router();

route.post("/create-review", protect, ReviewController.createReview);
route.get("/get-review/:id", ReviewController.getReview);
route.get("/all-review", ReviewController.allReview);
route.get(
  "/get-review-email/:email",
  protect,
  ReviewController.getReviewByEmail
);
route.delete("/review-delete/:id", protect, ReviewController.DeleteReviewByid);
route.patch("/review-update/:id", protect, ReviewController.UpdateReviewByid);

export const ReviewRouter = route;
