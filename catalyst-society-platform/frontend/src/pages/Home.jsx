const Home = () => {
  const handleHealthCheck = async () => {
    try {
      const response = await fetch("/health");
      const data = await response.json();
      console.log("Health response:", data);
    } catch (error) {
      console.error("Health check failed:", error);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <section className="w-full max-w-3xl rounded-3xl bg-white/80 p-10 shadow-xl shadow-slate-200 backdrop-blur">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
            Student Club Platform
          </span>
          <h1 className="text-4xl font-bold text-ink sm:text-5xl">
            Catalyst Society – Platform Running
          </h1>
          <p className="text-lg text-slate-600">
            Launching the hub for events, projects, and member collaboration. Your
            backend connectivity test lives right here.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={handleHealthCheck}
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Run Health Check
            </button>
            <span className="text-sm text-slate-500">
              Check the console for the API response.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
