import axios from "axios";

export const BASE_URL = axios.create({
    baseURL: "http://localhost:3332/api/v1",
});
