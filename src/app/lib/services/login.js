import {instance} from "@/app/lib/services/instanceAxios";

const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
    }

    return data;
};
export default async function login() {
    const url = `${instance.baseUrl}/login`;

    const options = {
        method: 'POST',
        body: JSON.stringify({
            email: "fatah@mail.com",
            password: "fattah123",
        }),
    };

    try {
        const res = await fetchData(url, options);
        return res;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

