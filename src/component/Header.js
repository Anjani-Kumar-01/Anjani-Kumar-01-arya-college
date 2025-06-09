import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: or use raw SVG if you don't want to install lucide
import logo from "../image/mainlogo.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-white border-b shadow-sm">
  
      <div className="bg-red-600 text-white text-sm py-1 px-4 flex justify-between">
        <span>📞 1800-102-1044</span>
        <span>✉️ admission@aryacollege.org</span>
      </div>
        <div className="flex items-center justify-between p-4">
      
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Arya Logo" className="h-12 w-auto" />
        </div>
         <nav className="hidden md:flex space-x-4 text-sm font-medium">
          <a href="#" className="text-red-600 font-semibold">Home</a>
          <a href="#">About Arya</a>
          <a href="#">Academics</a>
          <a href="#">Events</a>
          <a href="#">Placements</a>
          <a href="#">Gallery</a>
          <a href="#">Infrastructure</a>
          <a href="#">Resources</a>
          <a href="#">Blogs</a>
          <a href="#">Contact Us</a>
        </nav>

       
        <button
          className="md:hidden text-red-600"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

    
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-gray-100 px-4 pb-4 space-y-2 text-sm font-medium">
          <a href="#" className="block text-red-600 font-semibold">Home</a>
          <a href="#"   className="block font-semibold">About Arya</a>
          <a href="#" className="block font-semibold">Academics</a>
          <a href="#" className="block font-semibold">Events</a>
          <a href="#"  className="block font-semibold">Placements</a>
          <a href="#" className="block font-semibold">Gallery</a>
          <a href="#" className="block font-semibold">Infrastructure</a>
          <a href="#" className="block font-semibold">Resources</a>
          <a href="#" className="block font-semibold">Blogs</a>
          <a href="#" className="block font-semibold">Contact Us</a>
        </nav>
      )}
    </header>
  );
}

