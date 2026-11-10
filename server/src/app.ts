
import express from "express";

import healthRoutes from "./routes/health.routes";
import projectRoutes from "./routes/projects.routes";

const app = express();

// Middleware
app.use(express.json());

// Root endpoint
app.get("/", (_req, res) => {
  res.json({
    message: "Welcome to TeamFlow API",
    status: "success",
  });
});

// API routes
app.use("/api/health", healthRoutes);
app.use("/api/projects", projectRoutes);

export default app;
