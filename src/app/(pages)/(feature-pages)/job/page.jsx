import Header from "@/app/(pages)/(feature-pages)/job/components/header";
import SearchBar from "@/app/(pages)/(feature-pages)/job/components/search-bar";

function JobPage() {
    return (
        <div className="h-screen w-screen">
            <Header/>
            <div className="w-full h-full  my-[75px] px-[60px]">
                <SearchBar/>
            </div>
        </div>
    );
}

export default JobPage;