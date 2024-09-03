import { Request, Response } from "express";

import bcrypt from "bcryptjs";
import { User } from "./user.model";
import generateAccessToken, {
  generateRefreshToken,
} from "../../utils/generateToken";
import { UserService } from "./user.service";
import jwt from "jsonwebtoken";
import { loginSchemaZod, userSchemaZod } from "./user.validation";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const validData = userSchemaZod.parse(data);
    const userEmail = validData.userEmail;
    const userExists = await User.findOne({ userEmail });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(validData.password, salt);

    const user = await UserService.registerUser({
      userName: validData.userName,
      userEmail: validData.userEmail,
      password: hashedPassword,
      role: validData.role,
    });
    console.log(user);

    // Now generate the refresh token using the user ID
    const refreshToken = generateRefreshToken(user._id.toString(), user.role);
    user.refreshToken = refreshToken;
    await user.save();

    res.status(200).json({
      success: true,
      message: "User Created Successfully",
      data: {
        _id: user._id,
        userName: user.userName,
        userEmail: user.userEmail,
        role: user.role,
        token: generateAccessToken(user._id.toString(), user.role),
        refreshToken: user.refreshToken,
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: err,
    });
  }
};

export const authUser = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const validData = loginSchemaZod.parse(data);
    const userEmail = validData.userEmail;
    const user = await User.findOne({ userEmail });
    if (!user) {
      return res.status(400).json({ message: "This Email Not Create Account" });
    }
     const isPasswordValid = bcrypt.compareSync(validData.password, user.password);

    if (user && !isPasswordValid) {
      console.log(isPasswordValid);
      
      // If password is incorrect
      return res.status(400).json({ message: "Incorrect  Password" });
    }
    if (user && bcrypt.compareSync(validData.password, user.password)) {
      const refreshToken = generateRefreshToken(user._id.toString(), user.role);
      user.refreshToken = refreshToken;
      await user.save();

      res.json({
        _id: user._id,
        userName: user.userName,
        userEmail: user.userEmail,
        role: user.role,
        accessToken: generateAccessToken(user._id.toString(), user.role),
        refreshToken: user.refreshToken,
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: err,
    });
  }
};

export const refreshToken = async (req: Request, res: Response) => {
  const { token } = req.body;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET!) as {
      id: string;
    };
    const user = await User.findById(decoded.id);

    if (!user || user.refreshToken !== token) {
      return res.status(403).json({ message: "Invalid refresh token" });
    }

    const newAccessToken = generateAccessToken(user._id.toString(), user.role);
    const newRefreshToken = generateRefreshToken(
      user._id.toString(),
      user.role
    );

    user.refreshToken = newRefreshToken;
    await user.save();

    res.json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  } catch (error) {
    if (error instanceof Error) {
      res
        .status(403)
        .json({ message: "Invalid refresh token", error: error.message });
    } else {
      res
        .status(403)
        .json({ message: "Invalid refresh token", error: "Unknown error" });
    }
  }
};

const singleUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await UserService.singleUser(id);
    res.status(200).json({
      success: true,
      message: "Get Single user Succesfull",
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

const deleteUser = async (req: Request, res: Response) => {
  try {
    const id=req.params.id
    const result = await UserService.deleteUser(id);
    res.status(200).json({
      success: true,
      message: " user delete Succesfull",
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
const AllUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.AllUser();
    res.status(200).json({
      success: true,
      message: "Get all user Succesfull",
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
const updateUserRole = async (req: Request, res: Response) => {
  try {
    const {_id, role}=req.body
    
    const result = await UserService.updateUserRole(_id,role);
    res.status(200).json({
      success: true,
      message: "Update Role Succesfull",
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
export const UserController = {
  registerUser,
  singleUser,
  AllUser,
  deleteUser,
  updateUserRole
};
