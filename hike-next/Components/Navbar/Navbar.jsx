"use client";
import React, { useState, useEffect } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import ContactModal from "@/Booking/ContactModel"; // You'll need to create this component

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    setIsContactModalOpen(true);
    setIsMobileMenuOpen(false); // Close mobile menu if open
  };

  useEffect(() => {
    if (isMobileMenuOpen || isContactModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen, isContactModalOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/Logo/HY-Logo-removebg.webp"
              alt="Hike Yorkshire Logo"
              className="w-20 h-15 object-contain"
            />
            <span className="text-[20px] font-semibold text-black font-[Raleway]">
              Hike Yorkshire
            </span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-[16px] font-medium text-[#1D1D1D] font-['Nunito_Sans']">
            <li>
              <a href="/" className="hover:text-orange-500">
                Home
              </a>
            </li>
            <li>
              <a href="/hikes" className="hover:text-orange-500">
                Hikes
              </a>
            </li>
            <li>
              <a href="/walking-tours" className="hover:text-orange-500">
                Walking Tours
              </a>
            </li>
            
            <li>
              <a href="/courses" className="hover:text-orange-500">
                Courses
              </a>
            </li>
               <li>
              <a href="/blogs" className="hover:text-orange-500">
                Blog
              </a>
            </li>
          </ul>

          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            <button
              onClick={handleContactClick}
              className="px-6 py-2.5 border border-[#F98B64] text-[#F98B64] font-semibold rounded-lg hover:bg-orange-600 hover:text-white transition-all duration-200"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6 text-black" />
          </button>
        </div>

        {/* Overlay */}
        <div
          className={`md:hidden fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
            isMobileMenuOpen ? "opacity-50" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 w-4/5 max-w-sm h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <a
              href="/"
              className="flex items-center gap-2 text-[#1D1D1D]"
              onClick={handleLinkClick}
            >
              <img
                src="/Logo/HY-Logo.webp"
                alt="Hike Yorkshire Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="text-[20px] font-semibold font-[Raleway]">
                Hike Yorkshire
              </span>
            </a>

            <button
              onClick={handleLinkClick}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <XMarkIcon className="h-6 w-6 text-black" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="p-6">
            <ul className="flex flex-col gap-6 text-[18px] font-medium font-['Nunito_Sans'] text-[#1D1D1D]">
              <li>
                <a
                  href="/"
                  className="hover:text-[#C65A2E]"
                  onClick={handleLinkClick}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/hikes"
                  className="hover:text-[#C65A2E]"
                  onClick={handleLinkClick}
                >
                  Hikes
                </a>
              </li>
              <li>
                <a
                  href="/walking-tours"
                  className="hover:text-[#C65A2E]"
                  onClick={handleLinkClick}
                >
                  Walking Tours
                </a>
              </li>
              
              <li>
                <a
                  href="/courses"
                  className="hover:text-[#C65A2E]"
                  onClick={handleLinkClick}
                >
                  Courses
                </a>
              </li>
               <li>
                <a
                  href="/blogs"
                  className="hover:text-[#C65A2E]"
                  onClick={handleLinkClick}
                >
                  Blog
                </a>
              </li>
              <li>
                <button
                  onClick={handleContactClick}
                  className="hover:text-[#C65A2E] text-left"
                >
                  Contact Us
                </button>
              </li>
              <li className="flex items-center gap-6 pt-4">
                <a
                  href="https://www.instagram.com/hike.yorkshire"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C65A2E] hover:scale-110 transition-transform"
                  onClick={handleLinkClick}
                >
                  <FaInstagram className="text-xl" />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61581834381147"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C65A2E] hover:scale-110 transition-transform"
                  onClick={handleLinkClick}
                >
                  <FaFacebookF className="text-lg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
}