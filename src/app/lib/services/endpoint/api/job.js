import instanceAxios from "@/app/lib/services/instance/instance";

export default async function job(query) {
    try {
        const res = await instanceAxios.get(
            `/search/job`,
            {params: {search: query}
            }
        )

        return res.data.data
    } catch (error) {
        console.error(error);
        throw error
    }
}