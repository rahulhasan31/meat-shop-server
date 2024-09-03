import { Request, Response } from "express";
import { ReviewService } from "./review.service";

const createReview = async (req: Request, res: Response) => {
  try {
    const review = req.body;
    const result = await ReviewService.createReview(review);
    res.status(200).json({
      success: true,
      message: "review Create Succesfull",
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
const allReview = async (req: Request, res: Response) => {
  try {
    const result = await ReviewService.allReview();
    res.status(200).json({
      success: true,
      message: "Get review  Succesfull",
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
const getReview = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await ReviewService.getReview(id);
    res.status(200).json({
      success: true,
      message: "Get review  Succesfull",
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

const getReviewByEmail = async (req: Request, res: Response) => {
  try {
    const email = req.params.email;
    console.log(email);

    const result = await ReviewService.getReviewByEmail(email);
    res.status(200).json({
      success: true,
      message: "Get review by email  Succesfull",
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
const DeleteReviewByid = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await ReviewService.DeleteReviewByid(id);
    res.status(200).json({
      success: true,
      message: "Delete review by Id  Succesfull",
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
const UpdateReviewByid = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const result = await ReviewService.UpdateReviewByid(id, data);
    res.status(200).json({
      success: true,
      message: "Delete review by Id  Succesfull",
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
export const ReviewController = {
  createReview,
  getReview,
  getReviewByEmail,
  DeleteReviewByid,
  allReview,
  UpdateReviewByid,
};
