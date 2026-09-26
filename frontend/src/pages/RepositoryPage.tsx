import { Link, useParams } from "react-router-dom";

export function RepositoryPage() {
  const { username, repositoryName } = useParams<{
    username: string;
    repositoryName: string;
  }>();

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <header className="border-b border-slate-800 bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <h1 className="text-xl font-bold">
            GitHub Dashboard
          </h1>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">

        <Link
          to={`/users/${username}`}
          className="text-slate-400 hover:text-white"
        >
          ← Volver a los repositorios
        </Link>

        <h2 className="mt-6 text-3xl font-bold">
          {repositoryName}
        </h2>

        <p className="mt-2 text-slate-400">
          Repositorio de {username}
        </p>

      </main>

    </div>
  );
}