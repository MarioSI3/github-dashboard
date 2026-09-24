import type { Repository } from "../types/repository";

interface Props {
  repository: Repository;
}

export function RepositoryCard({ repository }: Props) {
  return (
    <article>
      <h2>{repository.name}</h2>

      <p>{repository.description}</p>

      <p>Language: {repository.language}</p>

      <p>Stars: {repository.stars}</p>

      <p>Forks: {repository.forks}</p>

      <a href={repository.url}>
        View on GitHub
      </a>
    </article>
  );
}
