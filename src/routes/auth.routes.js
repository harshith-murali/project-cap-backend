import { Router } from "express";
import RegisterUser from "../controllers/auth.controllers.js";
import { validateRequest } from "../middlwares/validator.middlwares.js";
import { userRegisterValidationSchema } from "../validators/index.js";
const router = Router();

router.route("/register").post(validateRequest(userRegisterValidationSchema), RegisterUser);

export default router;