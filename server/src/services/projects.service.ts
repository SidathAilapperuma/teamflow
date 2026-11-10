
import type { Project } from "../types/project.types";

// Temporary sample data
const projects: Project[] = [
  {
    id: 1,
    name: "Website Redesign",
    description: "Redesign the company website",
    status: "In Progress",
  },
  {
    id: 2,
    name: "Mobile Application",
    description: "Develop a mobile application",
    status: "Planning",
  },
  {
    id: 3,
    name: "Inventory System",
    description: "Build an inventory management system",
    status: "Completed",
  },
];

// Return all projects
export function getAllProjects(): Project[] {
  return projects;
}

// Return a project by ID
export function getProjectById(
  id: number
): Project | undefined {
  return projects.find((project) => project.id === id);
}
