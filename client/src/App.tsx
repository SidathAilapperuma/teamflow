
function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <main className="mx-auto max-w-5xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            TeamFlow
          </h1>
          <p className="mt-2 text-slate-600">
            Collaborative Project Management
          </p>
        </header>

        <section className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">
            Welcome to your dashboard
          </h2>
          <p className="mt-2 text-slate-500">
            Your projects and tasks will appear here.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
