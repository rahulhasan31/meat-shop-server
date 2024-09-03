import { z } from "zod";

export const userSchemaZod = z.object({
  userName: z.string().trim(),
  userNumber: z.number().int().optional(),
  userEmail: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  role: z.string().trim(),
});
export const loginSchemaZod = z.object({

  userEmail: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  
});
