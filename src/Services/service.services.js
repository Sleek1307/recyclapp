import axios from "axios";
import { uri } from "./config";

const getService = (data, token) => {
    const headers = {
        "Content-Type": "aplication/json; charset=utf-8",
        "Authorization": `Bearer ${token}`
    };
    return axios.post(`${uri}/recyclapp/services/condition`, JSON.stringify(data), { headers });
}

const getServiceById = (id, token) => {
    const headers = {
        "Content-Type": "aplication/json; charset=utf-8",
        "Authorization": `Bearer ${token}`
    };
    return axios.get(`${uri}/recyclapp/services/${id}`, { headers })
}

const createService = (data, token) => {
    const headers = {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": `Bearer ` + token
    };

    return axios.post(`${uri}/recyclapp/services`, JSON.stringify(data), { headers })
}

export { createService, getService, getServiceById };