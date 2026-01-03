import React, { useState } from 'react'
import { assets, menuLinks } from '../assets/assets'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = ({ setShowLogin }) => {
    const location = useLocation()
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    return (
        <div className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600 border-b border-borderColor relative transition-all ${location.pathname === "/" ? "bg-light" : "bg-white"}`}>

            {/* Logo */}
            <Link to='/'>
                <img src={assets.logo} alt="logo" className="h-8" />
            </Link>

            {/* Desktop Search Bar - Hidden on mobile */}
            <div className="hidden lg:flex items-center text-sm gap-2 border border-borderColor px-3 py-1.5 rounded-full max-w-56">
                <input
                    type="text"
                    className="w-full bg-transparent outline-none placeholder-gray-500"
                    placeholder='Search Car'
                />
                <img src={assets.search_icon} alt="search" className="h-4 w-4" />
            </div>

            {/* Desktop Menu and Buttons */}
            <div className="hidden sm:flex items-center gap-8">
                {menuLinks.map((link, index) => (
                    <Link
                        key={index}
                        to={link.path}
                        className={`hover:text-primary ${location.pathname === link.path ? "text-primary font-medium" : ""}`}
                    >
                        {link.name}
                    </Link>
                ))}

                {/* Desktop Buttons */}
                <div className='flex items-center gap-6'>
                    <Link to="/owner" className="cursor-pointer hover:text-primary">
                        Dashboard
                    </Link>
                    <button
                        onClick={() => setShowLogin(true)}
                        className='cursor-pointer px-6 py-2 bg-primary hover:bg-primary-dark transition-all text-white rounded-lg'
                    >
                        Login
                    </button>
                </div>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="sm:hidden"
                onClick={() => setOpen(!open)}
            >
                <img
                    src={open ? assets.close_icon : assets.menu_icon}
                    alt="menu"
                    className="h-6 w-6"
                />
            </button>

            {/* Mobile Menu (Full Screen) */}
            <div className={`fixed top-16 left-0 h-screen w-full bg-white border-t border-borderColor sm:hidden flex flex-col p-6 gap-6 transition-all duration-300 z-50 ${open ? "translate-x-0" : "translate-x-full"}`}>

                {/* Mobile Search Bar */}
                <div className="flex items-center text-sm gap-2 border border-borderColor px-3 py-2 rounded-full w-full">
                    <input
                        type="text"
                        className="w-full bg-transparent outline-none placeholder-gray-500"
                        placeholder='Search Car'
                    />
                    <img src={assets.search_icon} alt="search" className="h-4 w-4" />
                </div>

                {/* Mobile Menu Links */}
                {menuLinks.map((link, index) => (
                    <Link
                        key={index}
                        to={link.path}
                        className={`py-2 text-lg ${location.pathname === link.path ? "text-primary font-medium" : ""}`}
                        onClick={() => setOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}

                {/* Mobile Buttons */}
                <div className='flex flex-col gap-4 pt-4'>
                    <button onClick={() => navigate('/owner')} className="cursor-pointer text-left py-2 hover:text-primary">
                        Dashboard
                    </button>
                    <button 
    onClick={() => setShowLogin(true)}
    className='cursor-pointer px-6 py-3 bg-primary hover:bg-primary-dark transition-all text-white rounded-lg text-center'
>
    Login
</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar