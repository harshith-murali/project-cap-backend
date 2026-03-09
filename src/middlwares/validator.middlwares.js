import ApiError from "../utils/api-errors.js";

export const validateRequest = (schema) => {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const errors = result.error.issues.map((err) => err.message);
      throw new ApiError(400, "Validation Error", errors);
    }

    next();
  };
};