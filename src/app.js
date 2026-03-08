import express from "express";
const app = express();
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
app.get("/", (req, res) => {
  res.send("Project Camp Backend Live 🚀");
});

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// cors configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

// importing routes
import healthCheckRoutes from "./routes/healthcheck.routes.js";

app.use("/api/v1/healthcheck", healthCheckRoutes);

export default app;
