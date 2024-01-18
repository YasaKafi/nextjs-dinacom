import instanceAxios from "@/app/lib/services/instance/instance";

export default async function userInternship(userId) {
    try {
        const res = await instanceAxios.get(
            `/internship-user/${userId}`
        )
        const userData = res.data.data

        const userInternshipData = userData.internship_id.map(async (courseId) => {
            const resList = await instanceAxios.get(
                `/internship/${courseId}`
            )
            return resList.data.data
        })

        const internshipDataArray = await Promise.all(userInternshipData)

        return internshipDataArray

    } catch (error) {
        console.error(error);
        throw error
    }
}