import instanceAxios from "@/app/lib/services/instance/instance";

export default async function internship(query) {
    try {
        const res = await instanceAxios.get(
            `/search/internship`,
            {params: {search: query}
            }
        )
        return res.data.data
    } catch (error) {
        console.error(error);
        throw error
    }
}