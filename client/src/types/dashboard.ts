
export type TaskStatus = "To Do" | "In Progress" | "Done";

export interface DashboardStat {
  title: string;
  value: number;
  icon: "projects" | "tasks" | "progress" | "completed";
}

export interface Project {
  id: number;
  name: string;
  status: "Planning" | "In Progress" | "Completed";
}

export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}