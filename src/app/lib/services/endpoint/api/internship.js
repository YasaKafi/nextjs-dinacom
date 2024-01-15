import instanceAxios from "@/app/lib/services/instance/instance";

export default async function internship() {
    try {
        const res = await instanceAxios.get('/internship')
        return res.data.data
    } catch (error) {
        console.error(error);
        throw error
    }
}