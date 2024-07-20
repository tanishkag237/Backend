import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

// similar as making express app (app.js)

const router=Router();

router.route("/register").post(registerUser)

export default router