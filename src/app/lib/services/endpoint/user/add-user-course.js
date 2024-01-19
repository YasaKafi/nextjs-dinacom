import instanceAxios from "@/app/lib/services/instance/instance";

export default async function addUserCourse({userId, courseId}) {
    try {
        const res = await instanceAxios.post(`/course-user/add`, {
            id: userId,
            course_id: courseId,
        })
        return res.data

    } catch (error) {
        console.error(error);
        throw error
    }
}