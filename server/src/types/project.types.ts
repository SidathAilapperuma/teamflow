
export interface Project {
  id: number;
  name: string;
  description: string;
  status: "Planning" | "In Progress" | "Completed";
}
