import axios from "axios";

const instance = axios.create({
    baseURL: "https://sandbox-invest-public-api.tinkoff.ru/rest"
})
export default instance;