
import { useState } from "react";
import { Menu } from "lucide-react";

import Sidebar from "./layouts/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="min-w-0 flex-1">
        {/* Mobile and tablet header */}
        <header className="flex items-center gap-4 border-b border-slate-200 bg-white p-4 lg:hidden">
          <button
            type="button"
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Open navigation menu"
            aria-controls="teamflow-sidebar"
            aria-expanded={isSidebarOpen}
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100"
          >
            <Menu size={24} />
          </button>

          <span className="text-lg font-bold text-slate-900">
            TeamFlow
          </span>
        </header>

        {/* Main dashboard content */}
        <main className="min-w-0 p-4 sm:p-6 lg:p-8">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;
