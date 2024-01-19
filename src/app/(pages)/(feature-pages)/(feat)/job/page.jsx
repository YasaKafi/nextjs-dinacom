import Header from "@/app/(pages)/(feature-pages)/(feat)/job/components/header";
import SearchBar from "@/app/(pages)/(feature-pages)/(feat)/job/components/search-bar";
import JobFilter from "@/app/(pages)/(feature-pages)/(feat)/job/components/job-filter";
import JobList from "@/app/(pages)/(feature-pages)/(feat)/job/components/job-list";
import job from "@/app/lib/services/endpoint/api/job";
import jobMaxSallary from "@/app/lib/services/endpoint/filter/job-max-sallary";
import jobPopular from "@/app/lib/services/endpoint/filter/job-popular";
import filterJobType from "@/app/lib/services/endpoint/filter/job-type";

export default async function JobPage({searchParams}) {
    const search =
        typeof searchParams.search === 'string' ? searchParams.search : "";
    const sortBy =
        typeof searchParams.sort_by === 'string' ? searchParams.sort_by : "";
    const jobType =
        typeof searchParams.job_type === 'string' ? searchParams.job_type : "";
    const position =
        typeof searchParams.position === 'string' ? searchParams.position : "";


    const listJob = await job(search)

    if(search === "" && sortBy === "" && jobType === "" && position === "") {
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

    if(search === "" && sortBy === "popular" && jobType === "" && position === "") {
        const listJobPopular = await jobPopular()
        return (
            <div className=" w-screen">
                <Header/>
                <div className="w-full h-full  my-[75px] px-[60px]">
                    <SearchBar />
                    <div className="flex h-full w-full mt-10 gap-5">
                        <JobFilter/>
                        <JobList data={listJobPopular}/>
                    </div>
                </div>
            </div>
        );
    }

    if(search === "" && sortBy === "sallary-max" && jobType === "" && position === "") {
        const listJobMaxSallary = await jobMaxSallary()
        return (
            <div className=" w-screen">
                <Header/>
                <div className="w-full h-full  my-[75px] px-[60px]">
                    <SearchBar />
                    <div className="flex h-full w-full mt-10 gap-5">
                        <JobFilter/>
                        <JobList data={listJobMaxSallary}/>
                    </div>
                </div>
            </div>
        );
    }

    if(search === "" && sortBy === "" && jobType !== "" && position === "") {
        const listJobType = await filterJobType(jobType)
        return (
            <div className=" w-screen">
                <Header/>
                <div className="w-full h-full  my-[75px] px-[60px]">
                    <SearchBar />
                    <div className="flex h-full w-full mt-10 gap-5">
                        <JobFilter/>
                        <JobList data={listJobType}/>
                    </div>
                </div>
            </div>
        );
    }




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

