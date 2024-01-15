import Header from "@/app/(pages)/(feature-pages)/(feat)/job/components/header";
import SearchBar from "@/app/(pages)/(feature-pages)/(feat)/job/components/search-bar";
import JobFilter from "@/app/(pages)/(feature-pages)/(feat)/job/components/job-filter";
import JobList from "@/app/(pages)/(feature-pages)/(feat)/job/components/job-list";
import job from "@/app/lib/services/endpoint/api/job";

export default async function JobPage({searchParams}) {
    const search = searchParams.search === 'string' ? searchParams.search : undefined
    const listJob = await job(search)

    return (
        <div className=" w-screen">
            <Header/>
            <div className="w-full h-full  my-[75px] px-[60px]">
                <SearchBar />
                <div className="flex h-full w-full mt-10 gap-5">
                    <JobFilter/>
                    <JobList data={listJob}/>
                </div>
            </div>
        </div>
    );
}

