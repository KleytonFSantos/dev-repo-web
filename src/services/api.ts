import axios from "axios";

export type Session = {
    email: string;
    password: string;
}

export type Repositories = {
    match(regex: RegExp): string[];
    id: string;
    userId: string;
    query: string;
    repositoryUrl: any;
}





export const api = axios.create({
    baseURL: "http://localhost:5000",
});

export const createSession = async ({ email, password }: Session) => {
    return api.post("/sessions", {
        email,
        password,
    });
};

export const listRepositories = async ({ userId, query }: Repositories) => {
    let url = `/users/${userId}/repositories/`

    if (query !== "") {
        url += `?q=${query}`
    }

    console.log('query', url)

    return api.get(url)
}

export const createRepository = async ({ userId, repositoryUrl }: Repositories) => {
    const repositoryName = getRepositoryName(repositoryUrl);

    const url = `/users/${userId}/repositories/`;

    return api.post(url, { name: repositoryName, url: repositoryUrl })
}    

export const destroyRepository = async ({ userId, id }: Repositories) => {

    const url = `/users/${userId}/repositories/${id}`;

    return api.delete(url)
}

const getRepositoryName = (url: Repositories) => {
    const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/;

    const match = url.match(regex);
    
    console.log('match',match);

    if (match[2]) {
        const values = match[2].split("/");

        console.log('values',values);

        return `${values[1]}/${values[2]}`;
    }
}
