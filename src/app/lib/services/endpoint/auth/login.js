import instanceAxios from "@/app/lib/services/instance/instance";

export default async function login({email, password}) {
    try {
        const res = await instanceAxios.post('/auth/login', {
            email: email,
            password: password,
        })

        return res.data
    } catch (error) {
        console.error(error);
        throw error
    }
}