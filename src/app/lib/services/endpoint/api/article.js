import instanceAxios from "@/app/lib/services/instance/instance";

export default async function article(query) {
    try {
        const res = await instanceAxios.get(
            `/search/article`,
            {params: {search: query}
            }
        )
        return res.data.data
    } catch (error) {
        console.error(error);
        throw error
    }
}