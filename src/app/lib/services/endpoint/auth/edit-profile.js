import instanceAxios from "@/app/lib/services/instance/instance";

export default async function editProfile({name, email, no_hp, role, gender, province, city, birthdate, id, token}) {
    try {
        const res = await instanceAxios.post(`/auth/get-user/${id}?token=${token}`, {
            name: name,
            email: email,
            no_hp: no_hp,
            role: role,
            gender: gender,
            province: province,
            city: city,
            birthdate: birthdate
        })

        return res.data
    } catch (error) {
        console.error(error);
        throw error
    }
}