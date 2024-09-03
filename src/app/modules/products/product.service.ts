import { IProducts } from "./product.interface";
import { Product } from "./product.model";

const createProducts = async (student: IProducts) => {
  const result = await Product.create(student);
  return result;
};

const GetProducts = async () => {
  const result = await Product.find();
  return result;
};

const GetSingleProduct = async (Id: string) => {
  const result = await Product.findById(Id);
  return result;
};
const DeleteSingleProduct = async (Id: string) => {
  const result = await Product.findByIdAndDelete(Id);
  return result;
};
const UpdateSingleProduct = async (id: string, data: IProducts) => {
  const result = await Product.findOneAndUpdate({ _id: id }, data);
  return result;
};

export const ProdcutService = {
  createProducts,
  GetProducts,
  GetSingleProduct,
  DeleteSingleProduct,
  UpdateSingleProduct,
};
