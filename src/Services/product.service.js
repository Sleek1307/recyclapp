import axios from "axios";
import { uri } from "./config";

const getProducts = (token) => {

    const headers = {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": `Bearer ` + token
    };

    return axios.get(`${uri}/recyclapp/products`, { headers });
}

export { getProducts }