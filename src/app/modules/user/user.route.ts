import express from "express";
import { authUser, refreshToken, UserController } from "./user.controller";
import { admin, protect } from "../../middlewares/authMiddleware";

const router = express.Router();

router.post("/signup", UserController.registerUser);
router.post("/login", authUser);
router.post("/refresh-token", refreshToken);
router.get("/single-user/:id", protect, UserController.singleUser);
router.get("/all-user", protect,admin, UserController.AllUser);
router.delete("/user-delete/:id", protect,admin, UserController.deleteUser);
router.patch("/update-role", protect,admin, UserController.updateUserRole);
export const AuthRouter = router;
