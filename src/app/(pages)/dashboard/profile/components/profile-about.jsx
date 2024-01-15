import Image from "next/image";
import {iconSearch, jobHeaderIllustration} from "@/app/lib/utils/svg";
import getUser from "@/app/lib/services/endpoint/auth/get-user";

export default async function ProfileAbout() {

    const dataUser = await getUser()

    const gender = dataUser.gender === 0 ? "Laki-laki" : dataUser.gender === 1 ?  "Perempuan" : "Lainnya"

    function dataEmpty(data, message) {
        return data === "" || data === null ? message : data
    }

    const biodata = [
        {
            icon: jobHeaderIllustration,
            value: gender,
        },
        {
            icon: jobHeaderIllustration,
            value: dataEmpty(dataUser.birthdate, "Tanggal Lahir belum terisi"),
        },
        {
            icon: jobHeaderIllustration,
            value: dataEmpty(dataUser.city + dataUser.province, "Tanggal Lahir belum terisi"),
        },
        {
            icon: jobHeaderIllustration,
            value: dataEmpty(dataUser.email, "Tanggal Lahir belum terisi"),
        },
        {
            icon: jobHeaderIllustration,
            value: dataEmpty(dataUser.no_hp, "Tanggal Lahir belum terisi"),
        }
    ]

    return (
        <div className="bg-white w-[33%] h-full border border-colorBorder rounded-xl px-4 py-5">
            <h1 className="font-bold text-textPrimary text-xl">Tentang Saya</h1>
            <ul>
                {biodata.map((item, index) => (
                    <div key={index} className="flex flex-col my-4">
                        <div className="flex gap-2 mb-2">
                            <Image src={item.icon} alt="Icon Search" width={25} height={25}/>
                            <h3>{item.value}</h3>
                        </div>
                        {index !== biodata.length - 1 && (
                            <div className="h-[1px] w-full border border-colorBorder"></div>
                        )}
                    </div>
                ))}
            </ul>
        </div>
    );
}
