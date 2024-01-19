import instanceAxios from "@/app/lib/services/instance/instance";

export default async function jobPopular() {
    try {
        const res = await instanceAxios.get(
            `/filter/job-popular`,
        )

        return res.data.data
    } catch (error) {
        console.error(error);
        throw error
    }
}