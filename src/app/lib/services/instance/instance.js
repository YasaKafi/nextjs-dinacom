import axios from "axios";

const instance = axios.create({
    baseURL: 'https://1662-36-65-214-226.ngrok-free.app/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;