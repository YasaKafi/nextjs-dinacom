import instanceAxios from "@/app/lib/services/instanceAxios";

export default async function course() {
    try {
        const res = await instanceAxios.get('/course')
        return res.data.data
    } catch (error) {
        console.error(error);
        throw error
    }
}