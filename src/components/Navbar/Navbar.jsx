import React from 'react'
import Logo from "../../assets/Images/logo.png"

const Navbar = () => {
  return (
    <div data-aos="fade-down"
    className='sm:py-4 py-4 fixed right-0 top-0 z-[90] w-full bg-black/10 backdrop-blur-sm'>
        <div className="container">
            <div className="flex items-center justify-between">

                <div className="flex items-center text-white gap-4 font-bold text-2xl">
                    <img className='w-10' src={Logo}/>
                    <span>TCJ-SPACE</span>
                </div>

                <div className='text-white hidden md:block'>
                    <ul className='sm:py-0 flex items-center gap-6 py-4 text-xl'>
                        <li>
                            <a href='#'>About</a>
                        </li>
                        <li>
                            <a href='#'>Technology</a>
                        </li>
                        <li>
                            <a href='#'>Galaxy</a>
                        </li>
                        <li>
                            <a href='#'>Satellite</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <button className='text-white border-2 border-white px-3 py-1 rounded-md'>
                        Login
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar