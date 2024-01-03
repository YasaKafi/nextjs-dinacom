
import Image from "next/image";
import { editProfileUser } from "@/app/lib/utils/images";
import { FiEdit } from "react-icons/fi";
export default function ProfileEdit() {
    return(
        <div className="w-52 h-52 relative rounded-full bg-orange-300">
          <Image
            src={editProfileUser}
            alt="profile user"
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 flex items-center justify-center right-0 w-16 h-16 rounded-full bg-blue-500">
            <FiEdit size={25} color="white" />
          </div>
        </div>
    );
}