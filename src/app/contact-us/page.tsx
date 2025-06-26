import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconPhone,
    IconMail,
    IconMapPin,
} from '@tabler/icons-react';
import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#eaf1fb] to-[#bac7e9] py-12 px-2 flex flex-col items-center justify-center">
            <div className="max-w-5xl w-full mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#0033cc] mb-2 text-center">Contact Us</h2>
                <p className="text-lg text-gray-600 mb-10 text-center">Any question or remarks? Just write us a message!</p>
                <div className="flex flex-col md:flex-row gap-10">
                    {/* Left: Contact Info */}
                    <div className="flex-1 bg-gradient-to-b from-[#eaf1fb] to-[#c3d6f7] rounded-2xl p-8 flex flex-col justify-between shadow-md mb-8 md:mb-0">
                        <div>
                            <h3 className="text-2xl font-bold text-[#0033cc] mb-4">Contact Information</h3>
                            <div className="flex items-center gap-3 mb-4 text-gray-700">
                                <IconPhone size={22} className="text-[#0033cc]" />
                                <span>+91 012 3465 789</span>
                            </div>
                            <div className="flex items-center gap-3 mb-4 text-gray-700">
                                <IconMail size={22} className="text-[#0033cc]" />
                                <span>support@fixit.com</span>
                            </div>
                            <div className="flex items-center gap-3 mb-4 text-gray-700">
                                <IconMapPin size={22} className="text-[#0033cc]" />
                                <span>Narasaraopet, Palnadu (Dt), A.P, India.</span>
                            </div>
                        </div>
                        <div className="mt-8">
                            <span className="block mb-2 font-semibold text-[#0033cc]">Follow Us</span>
                            <div className="flex space-x-4">
                                <a href="#" className="hover:text-[#0033cc] text-gray-400"><IconBrandFacebook size={24} /></a>
                                <a href="#" className="hover:text-[#0033cc] text-gray-400"><IconBrandInstagram size={24} /></a>
                            </div>
                        </div>
                    </div>
                    {/* Right: Form */}
                    <form className="flex-1 bg-white rounded-2xl shadow-md p-8 border border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                            <div>
                                <label className="block mb-1 font-semibold text-sm">First Name</label>
                                <input type="text" className="w-full border-b border-gray-300 bg-transparent px-1 py-2 focus:outline-none" placeholder="First Name" />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold text-sm">Last Name</label>
                                <input type="text" className="w-full border-b border-gray-300 bg-transparent px-1 py-2 focus:outline-none" placeholder="Last Name" />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold text-sm">Email</label>
                                <input type="email" className="w-full border-b border-gray-300 bg-transparent px-1 py-2 focus:outline-none" placeholder="Email" />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold text-sm">Phone Number</label>
                                <input type="text" className="w-full border-b border-gray-300 bg-transparent px-1 py-2 focus:outline-none" placeholder="Phone Number" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1 font-semibold text-sm">Subject</label>
                            <input type="text" className="w-full border-b border-gray-300 bg-transparent px-1 py-2 focus:outline-none" placeholder="Subject" />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-1 font-semibold text-sm">Message</label>
                            <textarea rows={4} className="w-full border-b border-gray-300 bg-transparent px-1 py-2 focus:outline-none resize-none" placeholder="Write your message..."></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="bg-[#0033cc] hover:bg-[#0022aa] text-white px-8 py-2 rounded-lg font-semibold transition text-base shadow">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
            {/* Map Section */}
            <div className="max-w-5xl w-full mx-auto mt-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1 w-full h-[260px] rounded-xl overflow-hidden mb-6 md:mb-0">
                        <iframe
                            title="FixIt Location"
                            src="https://www.google.com/maps?q=Narasaraopet,+Palnadu+(Dt),+A.P.,+India.&output=embed"
                            width="100%"
                            height="100%"
                            className="rounded-xl border-0 w-full h-full"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#0033cc] mb-3">Our Location</h3>
                        <p className="text-gray-600 mb-2">Narasaraopet, Palnadu (Dt), A.P, India.</p>
                        <p className="text-gray-500 text-sm">We are located in the heart of the city, easily accessible for all your device repair needs. Visit us or reach out for more information!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage; 