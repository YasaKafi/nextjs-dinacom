'use client'

import {userTestimony} from "@/app/lib/utils/images";
import Image from "next/image";
import {arrowPrimary, arrowWhite, iconStar} from "@/app/lib/utils/icon";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useRef, useState} from "react";

function SliderTestimony() {
    const data = [
        {
            id: 1,
            name: 'Viezh Robert',
            place: 'Warsaw, Poland',
            description: 'Saya Sangat Senang',
            image: userTestimony,
            rating: '4,5'
        },
        {
            id: 2,
            name: 'Yessica Christy',
            place: 'Shanxi, China',
            description: 'Saya Sangat Senang',
            image: userTestimony,
            rating: '4,5'
        },
        {
            id: 3,
            name: 'Kim Young Jou',
            place: 'Seoul, South Korea',
            description: 'Saya Sangat Senang',
            image: userTestimony,
            rating: '4,5'
        },
        {
            id: 4,
            name: 'Kim Young Jou',
            place: 'Seoul, South Korea',
            description: 'Saya Sangat Senang',
            image: userTestimony,
            rating: '4,5'
        },
        {
            id: 5,
            name: 'Kim Young Jou',
            place: 'Seoul, South Korea',
            description: 'Saya Sangat Senang',
            image: userTestimony,
            rating: '4,5'
        },
    ]
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: false,
        afterChange: (index) => {
            setCurrentSlide(index);
        },
    };

    const next = () => {
        console.log("next")
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };


    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    return (
        <div className="flex justify-center mt-20">
            <div className="w-full">
                <Slider ref={sliderRef} {...settings}>
                    {data.map((item, index) => (
                            <div key={item.id}
                                 className={`w-[400px] h-[230px]  border ${currentSlide === index ? 'border-primary bg-white' : 'border-[#DDDDDD] bg-transparent'} rounded-xl p-7 flex flex-col`}>

                                <div className="w-full flex justify-between ">

                                    <div className="flex gap-7 items-center">
                                        <Image src={item.image} alt="User Testimony" width={50} height={50}/>
                                        <div>
                                            <h1 className="font-medium text-base">{item.name}</h1>
                                            <p className="text-[#4F5665] text-xs">{item.place}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <p className="text-[#4F5665] text-base">{item.rating}</p>
                                        <Image src={iconStar} alt="Rating" width={16} height={16}/>
                                    </div>

                                </div>

                                <p className="mt-4 text-sm text-textPrimary">
                                    {item.description}
                                </p>

                            </div>
                        ))
                    }
                </Slider>

                <div className="flex justify-between items-center ps-2 mt-10">

                    <div className="flex gap-2">
                        {
                            data.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={` h-[10px] rounded-full ${currentSlide === index ? 'bg-primary w-[25px]' : 'bg-[#DDDDDD] w-[10px]'}`}/>

                            ))
                        }
                    </div>

                    <div className="flex gap-3">

                        <div onClick={previous}
                             className="button-slide group">
                            <svg width="25" height="25" viewBox="0 0 30 30" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    className="fill-primary group-hover:fill-white transition ease-out duration-100"
                                    d="M23.75 13.7501H8.925L13.4625 8.3001C13.6747 8.04483 13.7768 7.71573 13.7463 7.3852C13.7158 7.05466 13.5553 6.74977 13.3 6.5376C13.0447 6.32543 12.7156 6.22335 12.3851 6.25382C12.0546 6.2843 11.7497 6.44483 11.5375 6.7001L5.2875 14.2001C5.24545 14.2598 5.20785 14.3224 5.175 14.3876C5.175 14.4501 5.175 14.4876 5.0875 14.5501C5.03084 14.6934 5.00118 14.846 5 15.0001C5.00118 15.1542 5.03084 15.3068 5.0875 15.4501C5.0875 15.5126 5.0875 15.5501 5.175 15.6126C5.20785 15.6778 5.24545 15.7404 5.2875 15.8001L11.5375 23.3001C11.655 23.4412 11.8022 23.5547 11.9686 23.6325C12.1349 23.7102 12.3164 23.7504 12.5 23.7501C12.7921 23.7507 13.0751 23.649 13.3 23.4626C13.4266 23.3577 13.5312 23.2288 13.6079 23.0834C13.6846 22.9379 13.7318 22.7788 13.7469 22.6151C13.762 22.4513 13.7447 22.2863 13.6959 22.1292C13.6471 21.9722 13.5678 21.8264 13.4625 21.7001L8.925 16.2501H23.75C24.0815 16.2501 24.3995 16.1184 24.6339 15.884C24.8683 15.6496 25 15.3316 25 15.0001C25 14.6686 24.8683 14.3506 24.6339 14.1162C24.3995 13.8818 24.0815 13.7501 23.75 13.7501Z"
                                    fill="none"/>
                            </svg>

                        </div>

                        <div onClick={next}
                             className="button-slide group">
                            <svg width="25" height="25" viewBox="0 0 30 30" fill="none" className="rotate-180"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    className="fill-primary group-hover:fill-white transition ease-out duration-100"
                                    d="M23.75 13.7501H8.925L13.4625 8.3001C13.6747 8.04483 13.7768 7.71573 13.7463 7.3852C13.7158 7.05466 13.5553 6.74977 13.3 6.5376C13.0447 6.32543 12.7156 6.22335 12.3851 6.25382C12.0546 6.2843 11.7497 6.44483 11.5375 6.7001L5.2875 14.2001C5.24545 14.2598 5.20785 14.3224 5.175 14.3876C5.175 14.4501 5.175 14.4876 5.0875 14.5501C5.03084 14.6934 5.00118 14.846 5 15.0001C5.00118 15.1542 5.03084 15.3068 5.0875 15.4501C5.0875 15.5126 5.0875 15.5501 5.175 15.6126C5.20785 15.6778 5.24545 15.7404 5.2875 15.8001L11.5375 23.3001C11.655 23.4412 11.8022 23.5547 11.9686 23.6325C12.1349 23.7102 12.3164 23.7504 12.5 23.7501C12.7921 23.7507 13.0751 23.649 13.3 23.4626C13.4266 23.3577 13.5312 23.2288 13.6079 23.0834C13.6846 22.9379 13.7318 22.7788 13.7469 22.6151C13.762 22.4513 13.7447 22.2863 13.6959 22.1292C13.6471 21.9722 13.5678 21.8264 13.4625 21.7001L8.925 16.2501H23.75C24.0815 16.2501 24.3995 16.1184 24.6339 15.884C24.8683 15.6496 25 15.3316 25 15.0001C25 14.6686 24.8683 14.3506 24.6339 14.1162C24.3995 13.8818 24.0815 13.7501 23.75 13.7501Z"
                                    fill="none"/>
                            </svg>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default SliderTestimony;