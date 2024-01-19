import { Tab } from "@headlessui/react";
import Image from "next/image";
import {
  coursesWork,
  decorationBottom,
  decorationBox,
  emptyDataIlustrationTraining,
} from "@/app/lib/utils/images";
import TrainingCard from "./components/card-training";
import userCourse from "@/app/lib/services/endpoint/user/user-course";
import userInternship from "@/app/lib/services/endpoint/user/user-internship";




export default async function Page() {

  // const [dataUserCourse, setDataUserCourse]  = useState()

  // useEffect(() => {
  //   async function fetchDataUserCourse() {
  //     try {
  //       const fetchedDataUserCourse = await userCourse(1);
  //       setDataUserCourse(fetchedDataUserCourse);
  //       console.log("FETCHED DATA USER COURSE")
  //       console.log(dataUserCourse)
  //     } catch (error) {
  //       console.error('Error fetching user course data:', error);
  //
  //     }
  //   }
  //
  //   fetchDataUserCourse();
  //
  // }, []);


  // const categories = [
  //   "Pelatihan yang sedang berlangsung",
  //   "Pelatihan yang sudah selesai"
  // ]


  return (
    <div className="w-full px-6 py-6 lg:px-12 lg:py-12 h-full ">
      {/*<Tab.Group>*/}
      {/*  <Tab.List className="lg:w-[70%] w-full flex flex-col lg:flex-row rounded-xl  p-1 ">*/}
      {/*      {categories.map((category, index) => (*/}
      {/*          <Tab*/}
      {/*              className={({ selected }) =>*/}
      {/*                  classNames(*/}
      {/*                      "w-full rounded-2xl py-2.5 text-sm font-medium",*/}
      {/*                      "ring-white/60  focus:outline-none focus:ring-2",*/}
      {/*                      selected*/}
      {/*                        ? "bg-primary bg-opacity-25 text-textPrimary"*/}
      {/*                        : "text-blue hover:bg-gray-200 hover:text-black",*/}
      {/*                      index !== Object.keys(category).length - 1 && "mr-12"*/}
      {/*                  )*/}
      {/*              }*/}
      {/*          >*/}
      {/*            {categories[index]}*/}
      {/*          </Tab>*/}
      {/*      ))}*/}

      {/*  </Tab.List>*/}

      {/*  /!*<Tab.Panels className="pt-8 w-full h-[95%]">*!/*/}
      {/*  /!*  {Object.values(categories).map((posts, idx) => (*!/*/}
      {/*  /!*    <Tab.Panel*!/*/}
      {/*  /!*      key={idx}*!/*/}
      {/*  /!*      className={classNames(*!/*/}
      {/*  /!*        "rounded-xl  p-3 w-full h-full",*!/*/}

      {/*  /!*      )}*!/*/}
      {/*  /!*    >*!/*/}
      {/*  /!*      {posts.length === 0 && (*!/*/}
      {/*  /!*        <div className="flex flex-col w-full items-center justify-center h-full ">*!/*/}
      {/*  /!*          <Image src={emptyDataIlustrationTraining} alt="" />*!/*/}
      {/*  /!*          <h2 className="text-xl font-medium text-gray-500 w-1/2 text-center">*!/*/}
      {/*  /!*            Tidak ada pelatihan saat ini, Ayo temukan peluang baru dan*!/*/}
      {/*  /!*            tingkatkan skill anda sekarang*!/*/}
      {/*  /!*            <span className="text-primary"> disini</span>*!/*/}
      {/*  /!*          </h2>*!/*/}
      {/*  /!*        </div>*!/*/}
      {/*  /!*      )}*!/*/}
      {/*  /!*      {posts.length > 0 && (*!/*/}
      {/*  /!*        <div className="h-full grid grid-cols-2 grid-rows-3 gap-6 overflow-auto ">*!/*/}
      {/*  /!*          {posts.map((post) => (*!/*/}
      {/*  /!*            <TrainingCard*!/*/}
      {/*  /!*            key={post.id}*!/*/}
      {/*  /!*            post={post}*!/*/}
      {/*  /!*            decorationBox={decorationBox}*!/*/}
      {/*  /!*            decorationBottom={decorationBottom}*!/*/}
      {/*  /!*          />*!/*/}
      {/*  /!*          ))}*!/*/}
      {/*  /!*        </div>*!/*/}
      {/*  /!*      )}*!/*/}
      {/*  /!*    </Tab.Panel>*!/*/}
      {/*  /!*  ))}*!/*/}
      {/*  /!*</Tab.Panels>*!/*/}
      {/*</Tab.Group>*/}
    </div>
  );
}
