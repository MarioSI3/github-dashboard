import { Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { UserPage } from "./pages/UserPage";
import { RepositoryPage } from "./pages/RepositoryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/users/:username"
        element={<UserPage />}
      />

      <Route
        path="/users/:username/repositories/:repositoryName"
        element={<RepositoryPage />}
      />
    </Routes>
  );
}

export default App;