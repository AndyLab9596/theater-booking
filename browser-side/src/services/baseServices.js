import axios from "axios";
import { DOMAIN, TOKEN } from "../utils/config";

class baseService {
    put = (url, model) => {
        return axios({
            url: `${DOMAIN}${url}`,
            method: "PUT",
            data: model,
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) }
        })
    };

    post = (url, model) => {
        return axios({
            url: `${DOMAIN}${url}`,
            method: "POST",
            data: model,
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) }
        })
    };

    get = (url, model) => {
        return axios({
            url: `${DOMAIN}${url}`,
            method: "GET",
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) }
        })
    };

    delete = (url, model) => {
        return axios({
            url: `${DOMAIN}${url}`,
            method: "DELETE",
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) }
        })
    }
}

export default baseService;