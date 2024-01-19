import instanceAxios from "@/app/lib/services/instance/instance";

export default async function userCourse(userId) {
    try {
        const res = await instanceAxios.get(`/internship-user/${userId}`)
        const userData = res.data.data
        console.log("TES USER DATA")
        console.log(userData)

        const userCourseData = userData.course_id.map(async (courseId) => {
            const resList = await instanceAxios.get(
                `/course/${courseId}`
            )
            return resList.data.data
        })

        return await Promise.all(userCourseData)

    } catch (error) {
        console.error(error);
        throw error
    }
}