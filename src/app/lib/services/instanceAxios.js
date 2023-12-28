import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://zell-dinacom.000webhostapp.com/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;