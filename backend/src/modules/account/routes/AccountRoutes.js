import express from "express";
import { register, login } from "../controllers/AccountController.js";
import {
  editProfileLogic,
  getProfileLogic,
} from "../controllers/ProfileController.js";
import { authVerify } from "../../../middlewares/authVerify.js";

const accountsRoutes = express.Router();

// Define your account-related routes
accountsRoutes.post("/register", register);
accountsRoutes.post("/login", login);

// Profile Rotes
accountsRoutes.get("/profile", authVerify, getProfileLogic);
accountsRoutes.put("/profile", authVerify, editProfileLogic);

export default accountsRoutes;
