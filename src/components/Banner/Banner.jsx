import React from 'react'
import SatelliteImg from "../../assets/Images/satelite1.jpg"
const Banner = () => {
  return (
    <div className='bg-black text-white pb-12 relative z-50'>
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <div>
                    <img data-aos="zoom-in"
                    src={SatelliteImg} alt='satellite-1-image'
                    className='w-full sm:w-[80%] mx-auto max-h-[350px] object-cover'/>
                </div>

                <div className='space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800'>
                    <p data-aos="fade-up"
                    className='text-sky-800 uppercase'>Our Mission</p>
                    <h1 data-aos="fade-up" data-aos-delay="300"
                    className='uppercase text-5xl'>Rapidcast</h1>
                    <p  data-aos="fade-up" data-aos-delay="500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, corporis esse molestias quidem
                        natus dolorem provident omnis quia, facere inventore repellendus molestiae incidunt eum.
                        Quibusdam, deleniti voluptatibus quisquam eos laborum corrupti saepe fugit facilis eveniet?
                        Fugit pariatur ipsa praesentium dolor aliquam quos tempore impedit, deserunt magnam doloremque
                        reiciendis quidem ipsum rem hic ullam illo aperiam veritatis, quo unde quam, ad sapiente est
                        obcaecati. Animi omnis eveniet consequuntur error alias reprehenderit eos dolores, dolore magnam,
                        natus odit. Provident qui asperiores excepturi ratione et quae rerum hic perspiciatis! Ratione,
                        illum. Distinctio animi similique soluta.
                    </p>
                    <button data-aos="fade-up" data-aos-delay="700"
                    className='primary-button'>Learn More</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Banner