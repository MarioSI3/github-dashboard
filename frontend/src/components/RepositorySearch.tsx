import { useState } from "react";
import type { SubmitEvent } from "react";

interface Props {
    onSearch: (username: string) => void;
}

export function RepositorySearch({ onSearch }: Props) {
    const [username, setUsername] = useState("");

    function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!username.trim()) {
            return;
        }

        onSearch(username);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="GitHub username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />

            <button type="submit">
                Buscar
            </button>
        </form>
    );
}