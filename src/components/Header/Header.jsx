import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="sticky top-0 bg-gray-900 border-orange-600 px-4 lg:px-6 py-2.5 rounded-lg text-orange-500">
            <div className="flex justify-between items-center mx-auto max-w-screen-xl">
                <button onClick={toggleMobileMenu} className="lg:hidden focus:outline-none">
                    <svg className="w-6 h-6 text-orange-600 hover:text-orange-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
                <nav className={`lg:flex lg:space-x-8 flex items-stretch ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                    <NavLink to="/" className="nav-link">
                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                       
                    </NavLink>
                    <NavLink to="/about" className="nav-link">
                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                     
                    </NavLink>
                    <NavLink to="/skill" className="nav-link">
                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H6M12 5l-7 7 7 7" />
                        </svg>
                        
                    </NavLink>
                    <NavLink to="/contact" className="nav-link">
                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}
