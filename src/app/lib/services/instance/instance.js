import axios from "axios";

const instance = axios.create({
    baseURL: 'https://2522-103-28-113-244.ngrok-free.app/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;