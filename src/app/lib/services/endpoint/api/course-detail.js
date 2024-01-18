import instanceAxios from "@/app/lib/services/instance/instance";

export default async function courseDetail(id) {
    try {
        const response = await instanceAxios.get(`/course/detail/${id}`);
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}