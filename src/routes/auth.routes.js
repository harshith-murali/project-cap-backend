import { Router } from "express";
import { registerUser, loginUser } from "../controllers/auth.controllers.js";
import { validateRequest } from "../middlwares/validator.middlwares.js";
import {
  userRegisterValidationSchema,
  userLoginValidationSchema,
} from "../validators/index.js";

const router = Router();

router
  .route("/register")
  .post(validateRequest(userRegisterValidationSchema), registerUser);
router
  .route("/login")
  .post(validateRequest(userLoginValidationSchema), loginUser);
export default router;
