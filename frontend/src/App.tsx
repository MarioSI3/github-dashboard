import { useState } from "react";

import { RepositorySearch } from "./components/RepositorySearch";
import { RepositoryList } from "./components/RepositoryList";
import { getRepositories } from "./services/githhubService";
//import { getRepositories } from "./services/githubService";
import type { UserRepositories } from "./types/repository";

function App() {
  const [data, setData] = useState<UserRepositories | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSearch(username: string) {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const result = await getRepositories(username);
      setData(result);
    } catch {
      setError("No se han podido obtener los repositorios.");
    } finally {
      setLoading(false);
    }
  }

return (
  <div className="min-h-screen bg-slate-950 text-white">

    {/* Header */}
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

    {/* Main */}
    <main className="mx-auto max-w-6xl px-6 py-10">

      {/* Hero */}
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

      {/* Loading */}
      {loading && (
        <p className="text-center text-slate-400">
          Cargando repositorios...
        </p>
      )}

      {/* Error */}
      {error && (
        <div className="mx-auto max-w-xl rounded-lg border border-red-800 bg-red-950 p-4 text-red-300">
          {error}
        </div>
      )}

      {/* Resultados */}
      {!loading && data && data.repositories.length > 0 && (
        <section>

          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              Repositorios de {data.username}
            </h2>

            <span className="text-sm text-slate-400">
              {data.repositories.length} repositorios
            </span>
          </div>

          <RepositoryList repositories={data.repositories} />

        </section>
      )}

    </main>
  </div>
);


}

export default App;