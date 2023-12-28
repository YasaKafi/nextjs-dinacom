import instanceAxios from "@/app/lib/services/instanceAxios";

export default async function login(body) {
    try {
        const res = await instanceAxios.post('/login', body)

        return res.data
    } catch (error) {
        console.error(error);
        throw error
    }
}