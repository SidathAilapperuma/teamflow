
import {
  LayoutDashboard,
  FolderKanban,
  ListChecks,
  Settings,
  Layers3,
  X,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems = [
  { name: "Dashboard", icon: LayoutDashboard, active: true },
  { name: "Projects", icon: FolderKanban, active: false },
  { name: "My Tasks", icon: ListChecks, active: false },
  { name: "Settings", icon: Settings, active: false },
];

export default function Sidebar({
  isOpen,
  onClose,
}: SidebarProps) {
  return (
    <>
      {/* Mobile and tablet overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        id="teamflow-sidebar"
        className={`
          fixed inset-y-0 left-0 z-50
          flex w-64 flex-col bg-slate-900 p-5 text-white
          transition-transform duration-300
          lg:sticky lg:top-0 lg:h-screen lg:shrink-0
          lg:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo and close button */}
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-blue-600 p-2">
              <Layers3 size={24} />
            </div>

            <div>
              <h1 className="text-xl font-bold">TeamFlow</h1>
              <p className="text-xs text-slate-400">
                Project Management
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1 hover:bg-slate-800 lg:hidden"
            aria-label="Close navigation menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation */}
        <nav aria-label="Main navigation" className="space-y-2">
          <p className="mb-3 text-xs font-semibold text-slate-400">
            WORKSPACE
          </p>

          {navigationItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.name}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 ${
                  item.active
                    ? "bg-blue-600 text-white"
                    : "text-slate-300"
                }`}
              >
                <Icon size={20} />
                <span className="text-sm font-medium">
                  {item.name}
                </span>
              </div>
            );
          })}
        </nav>

        {/* Demo profile */}
        <div className="mt-auto border-t border-slate-700 pt-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 font-semibold">
              U
            </div>

            <div>
              <p className="text-sm font-medium">Demo User</p>
              <p className="text-xs text-slate-400">
                Development Preview
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
