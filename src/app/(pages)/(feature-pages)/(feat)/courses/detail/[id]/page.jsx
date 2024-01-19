import React from "react";
import HeroComponent from "./components/hero-component";
import MainComponent from "./components/main-component";
import courseDetail from "@/app/lib/services/endpoint/api/course-detail";

export default async function EnrollCourses({params}) {
  const id = params.id
    console.log(id)
  const dataCourse = await courseDetail(1)
    console.log("DATA COURSE SERVER")
    console.log(dataCourse[0])

  return (
      <main className="w-full">
        <HeroComponent data={dataCourse[0]} />
        <MainComponent data={dataCourse[0]}/>
      </main>
  );
}


//Fetch add user Course
//requirement: id course, id user
//id course can be take from courseDetail
//id user can be take from auth
//while the button need to be client component
