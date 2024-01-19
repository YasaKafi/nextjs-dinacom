import instanceAxios from "@/app/lib/services/instance/instance";

export default async function article(query, category) {
    try {
        const res = await instanceAxios.get(
            `/search/article`,
            {params: {
                search: query,
                category: category
            }
            }
        )
        return res.data.data
    } catch (error) {
        console.error(error);
        throw error
    }
}