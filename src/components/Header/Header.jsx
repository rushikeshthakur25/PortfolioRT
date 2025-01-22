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
                <nav className={`lg:flex lg:space-x-8 ${isMobileMenuOpen ? 'block' : 'hidden'} space-y-4 lg:space-y-0 mt-4 lg:mt-0`}>
                    {/* Home Link */}
                    <NavLink to="/" className="nav-link flex items-center gap-2 px-4 py-2 rounded hover:bg-orange-800">
                        <img src="https://img.icons8.com/fluency-systems-filled/48/FD7E14/home.png" width={25} alt="Home" />
                        <span className="tooltip">Home</span>
                    </NavLink>
                    {/* About Link */}
                    <NavLink to="/project" className="nav-link flex items-center gap-2 px-4 py-2 rounded hover:bg-orange-800">
                        <img src="https://img.icons8.com/fluency-systems-filled/48/FD7E14/project-management.png" width={25} alt="Projects" />
                        <span className="tooltip">Projects</span>
                    </NavLink>
                    {/* Skills Link */}
                    <NavLink to="/skill" className="nav-link flex items-center gap-2 px-4 py-2 rounded hover:bg-orange-800">
                        <img src="https://img.icons8.com/windows/32/FD7E14/development-skill.png" width={25} alt="Skills" />
                        <span className="tooltip">Skills</span>
                    </NavLink>
                    {/* Contact Link */}
                    <NavLink to="/contact" className="nav-link flex items-center gap-2 px-4 py-2 rounded hover:bg-orange-800">
                        <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-achievements-recruitment-agency-flaticons-flat-flat-icons-2.png" width={25} alt="Achievements" />
                        <span className="tooltip">Achievements</span>
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}
