import type { Repository } from "../types/repository";
import { RepositoryCard } from "./RepositoryCard";

interface Props {
  repositories: Repository[];
}

export function RepositoryList({ repositories }: Props) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">   
      {repositories.map((repository) => (
        <RepositoryCard
          key={repository.url}
          repository={repository}
        />
      ))}
    </div>
  );
}
