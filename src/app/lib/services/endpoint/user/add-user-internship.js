import instanceAxios from "@/app/lib/services/instance/instance";

export default async function addUserInternship({userId, internshipId}) {
    try {
        const res = await instanceAxios.post(`/internship-user/add`, {
            id: userId,
            internship_id: internshipId,
        })
        return res.data

    } catch (error) {
        console.error(error);
        throw error
    }
}