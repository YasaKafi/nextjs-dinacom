import instanceAxios from "@/app/lib/services/instanceAxios";

export default async function register({ name, email, password }) {
  try {
    const res = await instanceAxios.post("/api/auth/register", {
        name: name,
        email: email,
        password: password,
    });

    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}