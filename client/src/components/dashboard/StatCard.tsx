
import {
  FolderKanban,
  ListTodo,
  Clock3,
  CheckCircle2,
} from "lucide-react";

import type { DashboardStat } from "../../types/dashboard";

const icons = {
  projects: FolderKanban,
  tasks: ListTodo,
  progress: Clock3,
  completed: CheckCircle2,
};

interface StatCardProps {
  stat: DashboardStat;
}

export default function StatCard({ stat }: StatCardProps) {
  const Icon = icons[stat.icon];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500">
          {stat.title}
        </p>

        <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
          <Icon size={20} />
        </div>
      </div>

      <h2 className="mt-4 text-3xl font-bold text-slate-900">
        {stat.value}
      </h2>
    </div>
  );
}
