import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { RepositoryList } from "../components/RepositoryList";
import { getRepositories } from "../services/githhubService";
import type { UserRepositories } from "../types/repository";

export function UserPage() {
  const { username } = useParams<{ username: string }>();

  const [data, setData] = useState<UserRepositories | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) {
      return;
    }

    async function loadRepositories() {
      setLoading(true);
      setError(null);
      setData(null);

      try {
        const result = await getRepositories(username!);
        setData(result);
      } catch {
        setError("No se han podido obtener los repositorios.");
      } finally {
        setLoading(false);
      }
    }

    loadRepositories();
  }, [username]);

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <header className="border-b border-slate-800 bg-slate-900">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold">
            GitHub Dashboard
          </h1>

          <Link
            to="/"
            className="text-sm text-slate-400 hover:text-white"
          >
            ← Nueva búsqueda
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">

        {loading && (
          <p className="text-center text-slate-400">
            Cargando repositorios...
          </p>
        )}

        {error && (
          <div className="mx-auto max-w-xl rounded-lg border border-red-800 bg-red-950 p-4 text-red-300">
            {error}
          </div>
        )}

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