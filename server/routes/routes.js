import express from "express";
import { userLogIn, userSignUp } from "../controller/user.js";
import { getProducts } from "../controller/product.js";

const router = express.Router();

router.post("/signUp", userSignUp);
router.post("/login", userLogIn);

router.get("/products", getProducts);

export default router;
