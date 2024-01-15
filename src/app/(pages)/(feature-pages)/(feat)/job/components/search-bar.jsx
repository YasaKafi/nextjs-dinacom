"use client"

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {iconLocation, iconSearch} from "@/app/lib/utils/svg";
import {useRouter} from "next/navigation";
import {useDebounce} from "use-debounce";

function SearchBar() {
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState('');
    const [query] = useDebounce(searchQuery, 500);

    useEffect(() => {
        if (searchQuery) {
            router.push(`/job?search=${searchQuery}`)
        } else {
            router.push(`/job`)
        }
    }, [query, router]);


    return (
        <div className="w-full h-[50px] flex">
            <div className="w-full h-6 relative">
                <div className="h-6 p-6 flex items-center absolute z-10">
                    <Image src={iconSearch} alt="Icon Search" width={24} height={24}/>
                </div>

                <input className="w-full h-6 border border-colorBorder p-6 ps-16 rounded-l-lg absolute"
                       type="text"
                       placeholder="Sedang mencari posisi apa?"
                       value={searchQuery}
                       onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <div className="w-2/3 h-6 relative">
                <div className="h-6 p-6 flex items-center absolute z-10">
                    <Image className="w-6 h-6" src={iconLocation} alt="Icon Location" width={24} height={24}/>
                </div>

                <input className="w-full h-6 border border-colorBorder p-6 ps-16 absolute"
                       type="text"
                       placeholder="Lokasi"
                />
            </div>
            <button className="bg-primary h-full w-1/3 text-white">
                Cari
            </button>
        </div>
    );
}

export default SearchBar;