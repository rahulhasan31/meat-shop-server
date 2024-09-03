import { z } from "zod";

const productSchema = z.object({
  name: z.string(),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
  imgUrl: z.string().url(),
  imgUrlOne: z.string().url(),
  imgUrlTwo: z.string().url(),
  productDetails: z.string(),
});

// Define a Zod schema for the order
export const orderSchemaZod = z.object({
  products: z.array(productSchema),
  paymentID: z.string(),
  paymentAmount: z.number().positive(),
  userName: z.string(),

  userEmail: z.string().email(),
  userID: z.string(),
  paymentStatus: z.string(),
});
