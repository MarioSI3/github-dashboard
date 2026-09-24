import type { UserRepositories } from "../types/repository";

export async function getRepositories(
    username: string
): Promise<UserRepositories> {

    const response = await fetch(
        `/api/users/${username}/repositories`
    );

    if (!response.ok) {
        throw new Error("Error al obtener los repositorios");
    }

    return response.json();
}