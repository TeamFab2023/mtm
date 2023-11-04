'use client'
import { useEffect, useState } from 'react'
interface Banner {
    title:string;
    para:string;
    image:string
}
const banners:Banner[] = [
    {
        title: "Your Exam's Success Partner",
        para: 'Comprehensive mock tests for PTE and IELTS',
        image: '../../assets/banner.webp'
    },
    {
        title: "Unlock Your Full Potential",
        para: 'Realistic test environment',
        image: '../../assets/banner-one.webp'
    },
    {
        title: "Elevate Your Learning Experience",
        para: "Detailed performance analysis",
        image: '../../assets/banner-two.webp'
    },
]
const Slider = () => {
    const [count, setCount] = useState(0)

    const handleSlider = () => {
        if (count === banners.length - 1) {
            setCount(0);
        } else {
            setCount(count + 1);
        }
    };
    setTimeout(handleSlider, 4000)
    return (
        <main className="isolate">
            <div className="py-24 sm:py-32">
                <div className="flex mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto lg:max-w-xl w-md text-center my-10">
                        <h1 className="lg:text-5xl text-4xl  font-semibold text-gray-900">
                            Your Exam's <span className="text-orange-400">Success</span> Partner
                        </h1><br />
                        <p className="lg:text-xl text-gray-600 text-center">
                            {banners[count].para}
                        </p>
                        <div className='mt-16'>
                        <a
                            href="#"
                            className="rounded-full w-80 bg-purple-900 lg:px-5 lg:py-3.5 px-3 py-2  font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Start Mock Test
                        </a>
                        </div>
                    </div>
                    <div className="mx-18 max-w-2xl text-center border-4 border-gray-400">
                        <img
                            src={banners[count].image}
                            alt=""
                            width={2432}
                            height={1442}
                            className='lg:h-96 h-80'
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Slider