import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className='flex text-white bg-indigo-900 items-center w-full py-1 justify-between mb-3'>
        <div className="logo flex items-center gap-2 relative left-3 ">
            <img className='w-12' src="Safetorv/logo/cyber-crime.png" alt="" />
            <h1 className='text-xl'>Safetorv</h1>
        </div>
        <div className='relative right-3'>
            <ul>
                <li className='gap-4 flex'>
                    <Link className='hover:font-bold' to="/">Home</Link>
                    <Link className='hover:font-bold' to="/about">About</Link>
                    <Link className='hover:font-bold' to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
