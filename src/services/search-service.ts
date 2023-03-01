import axios from "axios";

export function findUser(name: string) {
    return axios.get(`https://api.github.com/users/${name}`)
}