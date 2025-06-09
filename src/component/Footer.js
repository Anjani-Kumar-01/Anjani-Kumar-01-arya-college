import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Logo from '../image/featurespic1.png'; 

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-700 via-purple-700 to-blue-800 text-white pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Address */}
        <div>
          <img src={Logo} alt="Arya Logo" className="w-
127.72px mb-2" />
          <p className="text-sm">Arya College is the Best Engineering College in the entire Rajasthan.</p>
          <p className="mt-4 text-sm">
            <strong>Address</strong><br />
            SP-40, RIICO Industrial Area, Kukas,<br />
            Jaipur, Rajasthan, 302028
          </p>
          <div className="mt-4 flex gap-3 text-lg">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-2">Quick Links</h3>
          <ul className="text-sm space-y-1">
            <li>About Us</li>
            <li>News</li>
            <li>Placement</li>
            <li>Contact us</li>
            <li>Blogs</li>
            <li>Resources</li>
            <li>Mail Center</li>
            <li>Google</li>
            <li>Wikipedia</li>
          </ul>
        </div>

        {/* Admissions */}
        <div>
          <h3 className="font-bold mb-2">Admissions</h3>
          <ul className="text-sm space-y-1">
            <li>Download</li>
            <li>Prospectus</li>
            <li>Admission</li>
            <li>Procedure</li>
            <li>Fee Structure</li>
            <li>Our Affiliation</li>
            <li>Degree Status</li>
            <li>Bank Loan Assistance</li>
            <li>Industrial Alliances</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h3 className="font-bold mb-2">Other Links</h3>
          <ul className="text-sm space-y-1">
            <li>Top Engineering College in Jaipur</li>
            <li>Best Engineering College in Jaipur</li>
            <li>Best B.Tech College in India</li>
            <li>Best University for B.Tech in India</li>
            <li>Best Private University in India for b tech</li>
            <li>Best Private Engineering College in India</li>
            <li>Top 10 Private Engineering College in India</li>
            <li>Bachelor of Technology - B Tech Courses</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-white mt-6 border-t border-white/30 pt-4">
        © Copyright
      </div>
    </footer>
  );
};

export default Footer;
