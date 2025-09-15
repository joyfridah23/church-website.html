import React, { useState } from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuToggle = () => setMenuOpen(!menuOpen);
    const handleCloseMenu = () => setMenuOpen(false);
    return (
        <nav className="w-full top-0 fixed p-1 bg-blue-900 text-white shadow-lg z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 font-bold text-xl">FGCK Machakos</div>
                    <div className="hidden md:flex space-x-6">
                        <a href="/" className="hover:text-blue-300">Home</a>
                        <a href="/contact" className="hover:text-blue-300">Contact Us</a>
                        <a href="/location" className="hover:text-blue-300">Location</a>
                        <a href="/about" className="hover:text-blue-300">About Us</a>
                        <a href="/other-activities" className="hover:text-blue-300">Other Activities</a>
                        <a href="/gallery" className="hover:text-blue-300">Gallery</a>
                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={handleMenuToggle} className="mobile-menu-button text-white focus:outline-none">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu with animated transition */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-blue-900 text-white shadow-lg transform 
                    transition-transform duration-300 ease-in-out z-40 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
                style={{ willChange: 'transform' }}
            >
                <div className="flex justify-between items-center px-4 py-4 border-b border-blue-800">
                    <span className="font-bold text-xl">FGCK Machakos</span>
                    <button onClick={handleCloseMenu} className="text-white focus:outline-none">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="px-4 pb-4 flex flex-col space-y-2">
                    <a href="/" className="block py-2 hover:text-blue-300" onClick={handleCloseMenu}>Home</a>
                    <a href="/contact" className="block py-2 hover:text-blue-300" onClick={handleCloseMenu}>Contact Us</a>
                    <a href="/location" className="block py-2 hover:text-blue-300" onClick={handleCloseMenu}>Location</a>
                    <a href="/about" className="block py-2 hover:text-blue-300" onClick={handleCloseMenu}>About Us</a>
                    <a href="/other-activities" className="block py-2 hover:text-blue-300" onClick={handleCloseMenu}>Other Activities</a>
                    <a href="/gallery" className="block py-2 hover:text-blue-300" onClick={handleCloseMenu}>Gallery</a>
                </div>
            </div>
        </nav>
    );

    // ...existing code...
}

export default Navbar
