import instanceAxios from "@/app/lib/services/instance/instance";

export default async function article() {
    try {
        const res = await instanceAxios.get('/article')
        return res.data.data
    } catch (error) {
        console.error(error);
        throw error
    }
}