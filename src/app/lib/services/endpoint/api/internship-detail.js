import instanceAxios from "@/app/lib/services/instance/instance";

export default async function internshipDetail(id) {
    try {
        const response = await instanceAxios.get(`/internship/detail/${id}`);
        return response.data.data
    } catch (error) {
        console.error(error);
        throw error;
    }
}