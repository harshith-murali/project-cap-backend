import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  verifyEmail,
  resendEmailVerification,
  refreshAccessToken,
  forgotPassword,
  resetForgotPassword,
  changePassword,
} from "../controllers/auth.controllers.js";
import { validateRequest } from "../middlwares/validator.middlwares.js";
import {
  userRegisterValidationSchema,
  userLoginValidationSchema,
} from "../validators/index.js";
import { verifyJWT } from "../middlwares/auth.middlewares.js";
import {
  userForgotPasswordValidationSchema,
  userResetPasswordValidationSchema,
} from "../validators/index.js";
const router = Router();
// unprotected routes for registration and login
router
  .route("/register")
  .post(validateRequest(userRegisterValidationSchema), registerUser);
router
  .route("/login")
  .post(validateRequest(userLoginValidationSchema), loginUser);
router.route("/verify-email/:verificationToken").get(verifyEmail);
router.route("/refresh-token").post(refreshAccessToken);
router
  .route("/forgot-password")
  .post(validateRequest(userForgotPasswordValidationSchema), forgotPassword);
router
  .route("/reset-password/:resetToken")
  .post(
    validateRequest(userResetPasswordValidationSchema),
    resetForgotPassword,
  );
// Protected route for logout, user must be authenticated to access this route
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/current-user").get(verifyJWT, getCurrentUser);
router.route("/change-password").post(verifyJWT, changePassword);
router
  .route("/resend-verification-email")
  .post(verifyJWT, resendEmailVerification);
export default router;
