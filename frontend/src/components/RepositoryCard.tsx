import type { Repository } from "../types/repository";

interface Props {
  repository: Repository;
}

export function RepositoryCard({ repository }: Props) {
  return (
    <article 
        className="
          flex h-full flex-col
          rounded-xl
          border border-slate-800
          bg-slate-900
          p-5
          transition-all duration-200
          hover:-translate-y-1
          hover:border-slate-700
          hover:shadow-xl"
      >
      <h2 className="mb-2 text-lg font-semibold text-blue-400">        
        {repository.name}
      </h2>

      <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-400">
      {repository.description ?? "Sin descripción"}
      </p>
      
      <div className="mb-4 flex items-center gap-4 text-sm text-slate-400">
        <span>
          {repository.language ?? "N/A"}
        </span>

        <span>
          ⭐ {repository.stars}
        </span>

        <span>
          🍴 {repository.forks}
        </span>

      </div>



      <a href={repository.url}>
        View on GitHub
      </a>
    </article>
  );
}
