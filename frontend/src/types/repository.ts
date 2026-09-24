
export interface Repository {

    name: string;
    description: string | null;
    language: string | null;
    url: string;
    stars: number;
    forks: number;

}

export interface UserRepositories{

    username: string;
    repositories: Repository[];

}

