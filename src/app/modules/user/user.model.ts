import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    userNumber: {
      type: Number,
      required: false,
    },
    userEmail: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  }
);

export const User = model<IUser>("User", userSchema);
