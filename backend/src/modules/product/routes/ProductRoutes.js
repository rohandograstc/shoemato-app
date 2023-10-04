import express from "express";
import { CreateProduct } from "../controllers/ProductController.js";

const productRouter = express.Router();

// Define your account-related routes
// productRouter.get("/product", accountController.getAllAccounts);
productRouter.post("/product", CreateProduct);
// ... additional routes

export default productRouter;
