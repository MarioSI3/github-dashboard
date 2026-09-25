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
    <main>
      <h1>GitHub Repository Dashboard</h1>

      <RepositorySearch onSearch={handleSearch} />

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {data && (
        <RepositoryList repositories={data.repositories} />
      )}
    </main>
  );
}

export default App;