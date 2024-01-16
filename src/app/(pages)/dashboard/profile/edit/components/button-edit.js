export default async function ButtonEditProfile({
  name,
  email,
  noHp,
  role,
  gender,
  birthDate,
  selectedProvince,
  selectedCity,
}) {
  const handleEditProfile = async () => {
    try {
      const genderValue = gender === "male" ? 1 : 2;
      const response = await editProfile({
        name,
        email,
        noHp,
        role,
        gender: genderValue,
        birthDate,
        province: selectedProvince,
        city: selectedCity,
      });
      console.log("Response from registration:", response);
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };
  return (
    <>
      <div className="w-full flex flex-row  gap-4 justify-end ">
        <button>
          <h2 className="text-base font-medium text-primary rounded-lg border-2 border-primary py-3 px-9">
            Batal
          </h2>
        </button>
        <button onClick={handleEditProfile}>
          <h2 className="text-base font-medium text-white rounded-lg bg-primary py-3 px-8">
            Simpan
          </h2>
        </button>
      </div>
    </>
  );
}
