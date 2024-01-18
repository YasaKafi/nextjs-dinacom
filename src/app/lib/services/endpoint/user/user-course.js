import instanceAxios from "@/app/lib/services/instance/instance";

export default async function userCourse(userId) {
    try {
        const res = await instanceAxios.get(
            `/course-user/${userId}`
        )
        const userData = res.data.data

        const userCourseData = userData.course_id.map(async (courseId) => {
            const resList = await instanceAxios.get(
                `/course/${courseId}`
            )
            return resList.data.data
        })

        const courseDataArray = await Promise.all(userCourseData)

        return courseDataArray

    } catch (error) {
        console.error(error);
        throw error
    }
}