import { useNavigate } from "react-router-dom";
import { RepositorySearch } from "../components/RepositorySearch";

export function HomePage() {
  const navigate = useNavigate();

  function handleSearch(username: string) {
    navigate(`/users/${encodeURIComponent(username)}`);
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <header className="border-b border-slate-800 bg-slate-900">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold">
            GitHub Dashboard
          </h1>

          <span className="text-sm text-slate-400">
            Repository Explorer
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">

        <section className="mb-10 text-center">
          <h2 className="mb-3 text-4xl font-bold">
            Explora repositorios de GitHub
          </h2>

          <p className="mx-auto mb-8 max-w-xl text-slate-400">
            Introduce un nombre de usuario para consultar sus repositorios,
            lenguajes, estrellas y forks.
          </p>

          <RepositorySearch onSearch={handleSearch} />
        </section>

      </main>
    </div>
  );
}