import instanceAxios from "@/app/lib/services/instance/instance";

export default async function searchCourse(query) {
    try {
        const res = await instanceAxios.get(`/search/course?search=${query}`)
        return res.data.data
    } catch (error) {
        console.error(error);
        throw error
    }
}