import axios from "axios";

const instance = axios.create({
    baseURL: 'https://9020-180-253-77-75.ngrok-free.app/api/auth',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;