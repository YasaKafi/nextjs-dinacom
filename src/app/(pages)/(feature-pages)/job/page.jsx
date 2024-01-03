import Header from "@/app/(pages)/(feature-pages)/job/components/header";
import SearchBar from "@/app/(pages)/(feature-pages)/job/components/search-bar";
import JobFilter from "@/app/(pages)/(feature-pages)/job/components/job-filter";
import JobList from "@/app/(pages)/(feature-pages)/job/components/job-list";

function JobPage() {
    return (
        <div className=" w-screen">
            <Header/>
            <div className="w-full h-full  my-[75px] px-[60px]">
                <SearchBar/>
                <div className="flex h-full w-full mt-10 gap-5">
                    <JobFilter/>
                    <JobList/>
                </div>
            </div>
        </div>
    );
}

export default JobPage;