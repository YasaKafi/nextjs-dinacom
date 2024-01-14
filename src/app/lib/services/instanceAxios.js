import axios from "axios";

const instance = axios.create({
    baseURL: 'https://a60e-182-2-37-74.ngrok-free.app/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;