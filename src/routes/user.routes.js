import { registerUser } from "../controllers/user.controller.js";
import { Router } from 'express';
//console.log(registerUser);  // Add this line to check if it's undefined

const router = Router();

router.route("/register").post(registerUser);

export default router;