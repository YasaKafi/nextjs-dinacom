import React from 'react';
import CourseHeader from "@/app/(pages)/(feature-pages)/courses/components/header";
import SearchBarCourses from "@/app/(pages)/(feature-pages)/courses/components/search-bar";

function Page() {
    return (
        <div className="h-screen w-screen">
            <CourseHeader/>
            <div className="w-full h-full px-[80px] mt-20">
                <SearchBarCourses/>
            </div>
        </div>
    );
}

export default Page;