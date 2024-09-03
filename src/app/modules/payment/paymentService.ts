import Stripe from "stripe";
import config from "../../config";

const stripe = new Stripe(config.stripe as string, {
  apiVersion: "2024-06-20",
});

export const createPaymentIntent = async (amount: number) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
    });
    return paymentIntent.client_secret;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};
