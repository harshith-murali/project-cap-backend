import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
const app = express();

app.get("/", (req, res) => {
  res.send("Project Camp Backend Live 🚀");
});

app.set("trust proxy", 1);

// middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// CORS
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

// rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    success: false,
    message: "Too many requests from this IP, please try again later.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);
app.use(helmet());

// routes
import healthCheckRoutes from "./routes/healthcheck.routes.js";
import authRoutes from "./routes/auth.routes.js";

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/healthcheck", healthCheckRoutes);

export default app;
