import instanceAxios from "@/app/lib/services/instance/instance";

export default async function jobMaxSallary() {
    try {
        const res = await instanceAxios.get(
            `/filter/max-sallary`,
        )

        return res.data.data
    } catch (error) {
        console.error(error);
        throw error
    }
}