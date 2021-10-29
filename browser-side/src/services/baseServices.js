import axios from "axios";
import { DOMAIN, TOKEN, TOKEN_CYBERSOFT } from "../utils/config";

class baseService {
    put = (url, model) => {
        return axios({
            url: `${DOMAIN}${url}`,
            method: "PUT",
            data: model,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(TOKEN),
                'TokenCybersoft': TOKEN_CYBERSOFT
            }
        })
    };

    post = (url, model) => {
        return axios({
            url: `${DOMAIN}${url}`,
            method: "POST",
            data: model,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(TOKEN),
                'TokenCybersoft': TOKEN_CYBERSOFT
            }
        })
    };

    get = (url, model) => {
        return axios({
            url: `${DOMAIN}${url}`,
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(TOKEN),
                'TokenCybersoft': TOKEN_CYBERSOFT
            }
        })
    };

    delete = (url, model) => {
        return axios({
            url: `${DOMAIN}${url}`,
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(TOKEN),
                'TokenCybersoft': TOKEN_CYBERSOFT
            }
        })
    }
}

export default baseService;