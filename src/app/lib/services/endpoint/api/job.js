import instanceAxios from "@/app/lib/services/instance/instance";

export default async function job() {
    try {
        const res = await instanceAxios.get('/job')
        return res.data.data
    } catch (error) {
        console.error(error);
        throw error
    }
}