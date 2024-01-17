import express from "express";
import { login, registerUser } from "../controllers/RegisterUser.js";
import { order, getCoffee } from "../controllers/OrderCoffee.js";
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(login);
router.route("/order").post(order);
router.route("/getCoffee").get(getCoffee);

export default router;
