import express from "express";
const userRoutes = express.Router();
import userController from "../controller/userController.js";
import Auth from "../middleware/Auth.js";

userRoutes.post("/user", Auth.Authorizarion, userController.createUser);
userRoutes.post("/login", Auth.Authorizarion, userController.loginUser);

export default userRoutes;
