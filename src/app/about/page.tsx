import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eaf1fb] to-[#bac7e9] py-16 px-4 flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <p className="text-lg text-gray-700 mb-4">
          <span className="font-semibold text-[#0033cc]">FixIt</span> is on a mission to make device repair fast, reliable, and accessible for everyone. We believe in quality, transparency, and putting our customers first.
        </p>
      </div>
      {/* Cards Section */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl w-full mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#eaf1fb] mb-4">
            <span className="text-3xl">🎯</span>
          </div>
          <h3 className="text-xl font-bold text-[#0033cc] mb-2">Our Mission</h3>
          <p className="text-gray-600">Deliver high-quality, affordable repair services with transparency and care.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#eaf1fb] mb-4">
            <span className="text-3xl">💡</span>
          </div>
          <h3 className="text-xl font-bold text-[#0033cc] mb-2">Our Values</h3>
          <ul className="text-gray-600 list-disc list-inside text-left inline-block">
            <li>Integrity & Trust</li>
            <li>Customer First</li>
            <li>Innovation</li>
            <li>Quality Service</li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#eaf1fb] mb-4">
            <span className="text-3xl">🏆</span>
          </div>
          <h3 className="text-xl font-bold text-[#0033cc] mb-2">Why Choose Us?</h3>
          <p className="text-gray-600">Certified technicians, genuine parts, and a commitment to your satisfaction—every time.</p>
        </div>
      </div>
      {/* Closing Statement */}
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-md text-gray-500">
          Whether you need a quick screen replacement or a complex motherboard repair, our team is here to help.
        </p>
      </div>
    </div>
  );
};

export default About; 