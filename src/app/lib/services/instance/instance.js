import axios from "axios";

const instance = axios.create({
    baseURL: 'https://bf09-182-2-42-231.ngrok-free.app/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;