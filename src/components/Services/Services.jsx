import React from 'react'
import {FaReact} from "react-icons/fa"
import { FaShuttleSpace, FaSpaceAwesome } from 'react-icons/fa6'
import wave from "../../assets/Images/wave.gif"

const ServiceData = [
    {
        title: "HST",
        content: "300-1500Km",
        description: 
        "Used for astronomical observations, capturing stunning images of the universe.",
        icon: <FaReact className="text-7xl"/>,
        aosDealy: "300"
    },
    {
        title: "ISS",
        content: "500-1500Km",
        description: 
        "It's a habitable artifical satellite orbiting earth and serves as a space environment research laboratory.",
        icon: <FaShuttleSpace className="text-7xl"/>,
        aosDealy: "500"
    },
    {
        title: "GPS",
        content: "300-1500Km",
        description: 
        "UPart of the Global Positioning System (GPS) used for navigation.",
        icon: <FaSpaceAwesome className="text-7xl"/>,
        aosDealy: "700"
    }
]

const Services = () => {
  return (
    <div className='bg-black text-white relative z-50'>
        <div className='container'>
            <div className='min-h-[400px]'>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10'>
                    {
                        ServiceData.map((data,index)=>(
                            <div data-aos="fade-up" data-aos-delay={data.aosDealy}
                            className='min-h-[180px] flex flex-col gap-2 justify-center
                            items-center rounded-xl bg-sky-900/60 backdrop-blur-sm text-center text-2xl
                            py-8 px-3 w-full lg:w-[300px] mx-auto' key={index}>
                                {data.icon}
                                <h1>{data.title}</h1>
                                <p>{data.content}</p>
                                <p className='text-sm'>{data.description}</p>
                            </div>
                        ))
                    }
                </div>

                <img src={wave} className='relative z-0 -translate-y-24 h-[200px] w-full object-cover mix-blend-screen'
                alt='wave-image'/>
            </div>
        </div>
    </div>
  )
}

export default Services