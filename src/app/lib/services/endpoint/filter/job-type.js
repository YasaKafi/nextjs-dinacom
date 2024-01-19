import instanceAxios from "@/app/lib/services/instance/instance";

export default async function filterJobType(typeJob) {
    try {
        const res = await instanceAxios.get(
            `/filter/type-job`,
            {params: {type_job: typeJob}
            }
        )

        return res.data.data
    } catch (error) {
        console.error(error);
        throw error
    }
}