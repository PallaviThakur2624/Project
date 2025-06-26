"use client";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LayoutShell: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default LayoutShell; 