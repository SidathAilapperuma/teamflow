
import { Bell } from "lucide-react";
import StatCard from "../components/dashboard/StatCard";

import type {
  DashboardStat,
  Project,
  Task,
} from "../types/dashboard";

// Temporary data for frontend development
const stats: DashboardStat[] = [
  { title: "Total Projects", value: 4, icon: "projects" },
  { title: "Total Tasks", value: 18, icon: "tasks" },
  { title: "In Progress", value: 7, icon: "progress" },
  { title: "Completed", value: 11, icon: "completed" },
];

const projects: Project[] = [
  { id: 1, name: "Website Redesign", status: "In Progress" },
  { id: 2, name: "Mobile Application", status: "Planning" },
  { id: 3, name: "Inventory System", status: "Completed" },
];

const tasks: Task[] = [
  { id: 1, title: "Design login page", status: "In Progress" },
  { id: 2, title: "Create database schema", status: "To Do" },
  { id: 3, title: "Build REST API", status: "Done" },
];

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl">
      {/* Dashboard Header */}
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Dashboard
          </h1>
          <p className="mt-2 text-slate-500">
            Welcome back! Here's your project overview.
          </p>
        </div>

        <div
          aria-label="Notifications preview"
          className="rounded-full bg-white p-3 text-slate-600 shadow-sm"
        >
          <Bell size={20} />
        </div>
      </header>

      {/* Statistics */}
      <section
        aria-label="Project statistics"
        className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4"
      >
        {stats.map((stat) => (
          <StatCard key={stat.title} stat={stat} />
        ))}
      </section>

      {/* Projects and Tasks */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {/* Recent Projects */}
        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-lg font-semibold text-slate-900">
            Recent Projects
          </h2>

          <div className="space-y-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3 last:border-0"
              >
                <p className="font-medium text-slate-700">
                  {project.name}
                </p>

                <span className="shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                  {project.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Tasks */}
        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-lg font-semibold text-slate-900">
            Recent Tasks
          </h2>

          <div className="space-y-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3 last:border-0"
              >
                <p className="font-medium text-slate-700">
                  {task.title}
                </p>

                <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  {task.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
