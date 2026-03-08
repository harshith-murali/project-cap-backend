import ApiResponse from "../utils/api-response.js";
import ApiError from "../utils/api-errors.js";
import asyncHandler from "../utils/async-handler.js";
/**
const healthCheck = (req, res , next) => {
  try {
    res.status(200).json(new ApiResponse(true, "Server is healthy", null));
  } catch (error) {
    res
      .status(500)
      .json(new ApiError(false, "Server is unhealthy", error.message));
      next(err)
  }
};
*/
const healthCheck = asyncHandler(async (req, res) => {
  res.status(200).json(new ApiResponse(200, { message: "Server is running" }));
});
export default healthCheck;
