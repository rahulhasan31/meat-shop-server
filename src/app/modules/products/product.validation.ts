import { z } from "zod";

export const ProductSchemaZod = z.object({
  name: z.string().trim(),
  price: z.number(),
  quantity: z.number().int().positive(),
  imgUrl: z.string().trim(),
  imgUrlOne: z.string().trim(),
  imgUrlTwo: z.string().trim(),
  productDetails: z.string().trim(),
});
