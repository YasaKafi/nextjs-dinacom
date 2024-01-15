import instanceAxios from "@/app/lib/services/instance/instance";

export default async function getUser() {
    try {
        const res = await instanceAxios.post("/auth/get-user", {
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vOTEzOC0xODItMi00NS0yNS5uZ3Jvay1mcmVlLmFwcC9hcGkvYXV0aC9sb2dpbiIsImlhdCI6MTcwNTI4MjU4NywiZXhwIjoxNzA1Mjg2MTg3LCJuYmYiOjE3MDUyODI1ODcsImp0aSI6Ik5kRmJXMnVsZ29DUHpGeHciLCJzdWIiOiI2IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.zyv9xiSvtoJdZ-Ms14WEgTgwyzdRhyGZeD0nfUzMtR4",
        });

        return res.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}