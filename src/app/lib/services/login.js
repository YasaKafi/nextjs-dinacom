import instanceAxios from "@/app/lib/services/instanceAxios";

export default async function login({email, password}) {
    try {
        const res = await instanceAxios.post('/login', {
            email: email,
            password: password,
        })

        return res.data
    } catch (error) {
        console.error(error);
        throw error
    }
}