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
