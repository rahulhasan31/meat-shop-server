import { Request, Response } from "express";
import { createPaymentIntent } from "./paymentService";

export const createPayment = async (req: Request, res: Response) => {
  try {
    const { amount } = req.body;
    const clientSecret = await createPaymentIntent(amount);
    res.status(200).send({ clientSecret });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ error: error.message });
    } else {
      res.status(500).send({ error: "An unknown error occurred" });
    }
  }
};
