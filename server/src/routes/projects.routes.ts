
import { Router } from "express";

import {
  listProjects,
  getProject,
} from "../controllers/projects.controller";

const router = Router();

// GET all projects
router.get("/", listProjects);

// GET one project
router.get("/:id", getProject);

export default router;
