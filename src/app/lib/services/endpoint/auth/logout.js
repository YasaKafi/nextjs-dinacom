import instanceAxios from "@/app/lib/services/instance/instance";

export default async function logout(token) {
    try {
        const res = await instanceAxios.post('/auth/logout', {
            token: token,
        })

        return res.data
    } catch (error) {
        console.error(error);
        throw error
    }
}