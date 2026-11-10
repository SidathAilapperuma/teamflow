
import type { Request, Response } from "express";

import {
  getAllProjects,
  getProjectById,
} from "../services/projects.service";

// GET /api/projects
export function listProjects(
  _req: Request,
  res: Response
): void {
  const projects = getAllProjects();

  res.status(200).json({
    status: "success",
    count: projects.length,
    data: projects,
  });
}

// GET /api/projects/:id
export function getProject(
  req: Request,
  res: Response
): void {
  const rawId = req.params.id;

  if (
    typeof rawId !== "string" ||
    !/^[1-9]\d*$/.test(rawId)
  ) {
    res.status(400).json({
      status: "error",
      message: "Invalid project ID",
    });
    return;
  }

  const id = Number(rawId);

  if (!Number.isSafeInteger(id)) {
    res.status(400).json({
      status: "error",
      message: "Invalid project ID",
    });
    return;
  }

  const project = getProjectById(id);

  if (!project) {
    res.status(404).json({
      status: "error",
      message: "Project not found",
    });
    return;
  }

  res.status(200).json({
    status: "success",
    data: project,
  });
}
