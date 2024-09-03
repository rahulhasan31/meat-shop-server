import { Request, Response } from "express";
import { ProdcutService } from "./product.service";
import { ProductSchemaZod } from "./product.validation";

const createProducts = async (req: Request, res: Response) => {
  try {
    const product = req.body;

    const producvalidate = ProductSchemaZod.parse(product);

    const result = await ProdcutService.createProducts(producvalidate);
    res.status(200).json({
      success: true,
      message: "Product Create Succesfull",
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

const GetProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProdcutService.GetProducts();
    console.log(result);

    res.status(200).json({
      success: true,
      message: "Get All Product Succesfull",
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
const GetSingleProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await ProdcutService.GetSingleProduct(id);
    res.status(200).json({
      success: true,
      message: "Get Single Product Succesfull",
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
const DeleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await ProdcutService.DeleteSingleProduct(id);
    res.status(200).json({
      success: true,
      message: " Single Product delete Succesfull",
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
const UpdateSingleProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const producUpdate = ProductSchemaZod.parse(data);
    console.log("zod", producUpdate);

    const result = await ProdcutService.UpdateSingleProduct(id, producUpdate);
    res.status(200).json({
      success: true,
      message: " Single Product Update Succesfull",
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

export const ProductController = {
  createProducts,
  GetProducts,
  GetSingleProduct,
  DeleteSingleProduct,
  UpdateSingleProduct,
};
