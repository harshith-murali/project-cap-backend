import { z } from "zod";

export const userRegisterValidationSchema = z.object({
  email: z.string().email("Invalid email address"),
  username: z.string().min(3, "Username must be at least 3 characters long"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
      "Password must contain at least one letter and one number",
    ),
});

export const userLoginValidationSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const userChangeCurrentPasswordValidationSchema = z.object({
  currentPassword: z
    .string()
    .min(6, "Current password must be at least 6 characters long"),
  newPassword: z
    .string()
    .min(6, "New password must be at least 6 characters long")
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
      "New password must contain at least one letter and one number",
    ),
});

export const userForgotPasswordValidationSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export const userResetPasswordValidationSchema = z.object({
  newPassword: z
    .string()
    .min(6, "New password must be at least 6 characters long")
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
      "New password must contain at least one letter and one number",
    ),
});
