import type { Repository } from "../types/repository";
import { RepositoryCard } from "./RepositoryCard";

interface Props {
  repositories: Repository[];
}

export function RepositoryList({ repositories }: Props) {
  return (
    <div>   
      {repositories.map((repository) => (
        <RepositoryCard
          key={repository.url}
          repository={repository}
        />
      ))}
    </div>
  );
}
