import React from 'react'
import MountainPng from "../../assets/Images/moon-surface-hd.png"


const Hero = () => {
  return (
    <div className='h-full bg-black/20 text-white relative z-50'>
        <div className='h-full flex justify-center items-center p-4'>
            <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className='space-y-4 lg:pr-36'>
                    <h1 data-aos="fade-up"
                    className='text-5xl font-bold uppercase'>Orbite The Earth</h1>
                    <p data-aos="fade-up" data-aos-delay="300">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt quasi laborum inventore
                        deserunt nihil non, voluptatibus excepturi rerum enim eum blanditiis sit provident ipsum,
                        possimus ipsa vero quisquam impedit repellat.
                    </p>
                    <button data-aos="fade-up" data-aos-delay="500"
                    className='primary-button'>Learn More</button>
                </div>
                <div></div>
            </div>
        </div>
        {/* Surface section */}
        <img src={MountainPng} className='absolute z-10 right-0 bottom-0 brightness-50 w-full' alt='moon-image'/>
        {/* bottom gradient section */}
        <div className='absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90%
        h-[20px] sm:h-[50px] md:h-[60px]'>

        </div>
    </div>
  )
}

export default Hero