import React from "react";
import HeroComponent from "./components/hero-component";
import MainComponent from "./components/main-component";
import courseDetail from "@/app/lib/services/endpoint/api/course-detail";

export default async function EnrollCourses({params}) {
  const id = params.id
  const dataCourse = await courseDetail(id)

  return (
      <main className="w-full">
        <HeroComponent data={dataCourse} />
        <MainComponent data={dataCourse}/>
      </main>
  );
}
