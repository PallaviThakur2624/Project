import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-[#2b3990] to-[#0000cc] text-white px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-white pb-8">
        {/* Left Side - Brands & Mobiles */}
        <div className="md:col-span-2 grid grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              📱 Popular Brands
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Apple</li>
              <li>Samsung</li>
              <li>Xiaomi</li>
              <li>Realme</li>
              <li>Oppo</li>
              <li>Huawei</li>
              <li>Infinix</li>
              <li>Nokia</li>
              <li>Oneplus</li>
              <li>Google</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              📱 Popular Mobiles
            </h3>
            <ul className="space-y-2 text-sm">
              <li>iPhone 15 Pro</li>
              <li>Samsung Galaxy S22</li>
              <li>OnePlus 12R</li>
              <li>Realme C67</li>
              <li>Oppo A18</li>
              <li>Xiaomi Redmi Note 13</li>
              <li>Samsung Galaxy S23</li>
              <li>Infinix Hot 40 Pro</li>
            </ul>
          </div>
        </div>

        {/* Right Side - Partner, Newsletter, Social */}
        <div>
          <h3 className="font-semibold mb-4">Want to be a Partner</h3>
          <p className="mb-6">
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </p>

          <h3 className="font-semibold mb-2">Subscribe to our newsletter</h3>
          <div className="flex mb-6">
            <input
              type="text"
              placeholder="Email"
              className="px-3 py-2 rounded-l-md text-black focus:outline-none"
            />
            <button className="bg-blue-700 px-4 py-2 rounded-r-md hover:bg-blue-800">
              Subscribe
            </button>
          </div>

          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-gray-300">
            <a href="#" className="hover:text-white">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-sm mt-6">
        Copyright © Ltd. - All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer; 