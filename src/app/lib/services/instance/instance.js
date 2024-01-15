import axios from "axios";

const instance = axios.create({
    baseURL: 'https://9138-182-2-45-25.ngrok-free.app/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;