"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isFAQPage = pathname === "/faq";

  return (
    <div className="flex items-center justify-between px-10 py-6 bg-gradient-to-r from-indigo-500 to-gray-400">
      {/* Logo */}
      <div className="text-lg font-bold">Logo</div>

      {/* Center nav links */}
      <div className="flex justify-center items-center flex-grow">
        <div className="flex gap-16 font-bold">
          <div onClick={() => router.push("/")}
            className="hover:text-blue-600 hover:cursor-pointer"
          >Home</div>
          <div onClick={() => router.push("/about")}
            className="hover:text-blue-600 hover:cursor-pointer"
          >About</div>
          <div onClick={() => router.push("/contact-us")}
            className="hover:text-blue-600 hover:cursor-pointer"
          >Contact Us</div>
          <div onClick={() => router.push("/payment")}
            className="hover:text-blue-600 hover:cursor-pointer"
          >Payment</div>
          <div onClick={() => router.push("/faq")}
            className="hover:text-blue-600 hover:cursor-pointer"
          >FAQ's</div>
        </div>
      </div>

      {/* Right: Only visible on FAQ page */}
      {isFAQPage && (
        <button
          onClick={() => router.push("/book-repair")}
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded ml-4"
        >
          Book a Repair
        </button>
      )}
    </div>
  );
};

export default Navbar; 