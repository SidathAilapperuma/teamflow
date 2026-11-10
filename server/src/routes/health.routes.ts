
import { Router } from "express";

const router = Router();

// Check whether the API is running
router.get("/", (_req, res) => {
  res.status(200).json({
    status: "success",
    message: "TeamFlow API is healthy",
    timestamp: new Date().toISOString(),
  });
});

export default router;
