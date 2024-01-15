import instanceAxios from "@/app/lib/services/instance/instance";

export default async function getUser(token) {
    try {
        const res = await instanceAxios.post("/auth/get-user", {
            token: token,
        });

        return res.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}