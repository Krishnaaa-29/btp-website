import express from "express";
import { login, registerUser } from "../controllers/RegisterUser.js";
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(login);

export default router;
