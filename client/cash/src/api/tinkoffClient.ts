import axios from "axios";

const instance = axios.create({
    baseURL: "https://invest-public-api.tinkoff.ru/rest"
})
export default instance;