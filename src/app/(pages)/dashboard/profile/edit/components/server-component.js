import editProfile from "@/app/lib/services/endpoint/auth/edit-profile";

async function handleEditProfile({
  name,
  email,
  no_hp,
  role,
  gender,
  province,
  birthdate,
  city,
}) {
  try {
    
    const response = await editProfile({
      name,
      email,
      no_hp,
      role,
      gender,
      province,
      city,
      birthdate,
      id: 8,
      token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vOTEzOC0xODItMi00NS0yNS5uZ3Jvay1mcmVlLmFwcC9hcGkvYXV0aC9sb2dpbiIsImlhdCI6MTcwNTM3OTgxMCwiZXhwIjoxNzA1MzgzNDEwLCJuYmYiOjE3MDUzNzk4MTAsImp0aSI6IlF4c0c2d1lETmFxcVl6c0kiLCJzdWIiOiI4IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.9-kSPScwccjhv6Fw80Obxd1TXhUA3IQ5_f05ESfJDCU",
    });
    console.log("Response from registration:", response);
  } catch (error) {
    console.error("Error during registration:", error);
  }
}

export { handleEditProfile };
