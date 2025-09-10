import express from "express";
const userRoutes = express.Router();
import userController from "../controller/userController.js";

userRoutes.post("/user", userController.createUser);
userRoutes.post("/login", userController.loginUser);

export default userRoutes;
