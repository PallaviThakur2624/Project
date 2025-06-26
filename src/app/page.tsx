"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
// Images should be placed in public/devices/
const deviceImgs = [
  "/devices/iphone1.png",
  "/devices/ipad2.png",
  "/devices/android1.png",
  "/devices/laptop1.png",
];
const iphone = "/devices/iphone.png";
const Ipad = "/devices/Ipad.png";
const android = "/devices/android.png";
const tablet = "/devices/tablet.png";

const Home: React.FC = () => {
  const router = useRouter();
  const trackRef = useRef<HTMLDivElement>(null);
  const [searchDevice, setSearchDevice] = useState("");
  const deviceList = [
    "iPhone 13",
    "iPhone 14",
    "Samsung S22",
    "Samsung S23",
    "OnePlus 12",
    "Xiaomi Redmi Note 13",
    "iPad Pro",
    "MacBook Air",
    "Dell XPS 13",
    "Other"
  ];
  const [selectedDevice, setSelectedDevice] = useState("");

  const handleRepair = () => {
    router.push("/book-repair");
  };

  const handleGo = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!selectedDevice) return;
    router.push(`/book-repair?device=${encodeURIComponent(selectedDevice)}`);
  };

  useEffect(() => {
    let ctx: any;
    import("gsap").then((gsapModule) => {
      const gsap = gsapModule.default;
      ctx = gsap.context(() => {
        const ITEM_WIDTH = 340;
        const totalWidth = ITEM_WIDTH * deviceImgs.length * 2;
        if (trackRef.current) {
          gsap.set(trackRef.current, { width: totalWidth });
          gsap.to(trackRef.current, {
            x: -(totalWidth / 2),
            duration: 18,
            ease: "none",
            repeat: -1,
          });
        }
      });
    });
    return () => ctx && ctx.revert && ctx.revert();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center min-h-[calc(100vh-70px)] px-8 pt-0 pb-8 -mt-20 font-[Segoe UI]">
        <div className="flex bg-white rounded-[20px] overflow-hidden shadow-lg max-w-[900px] w-full">
          <div className="flex-1 p-10 flex flex-col justify-center bg-white text-[#0033cc] font-[poppins] text-left md:text-left text-center">
            <h2 className="text-2xl font-bold mb-5">Fast, affordable and reliable repairs...</h2>
            <h3 className="text-lg text-gray-400 mb-6">For your Devices</h3>
            {/* Device dropdown */}
            <form className="flex justify-center md:justify-start mb-8" onSubmit={handleGo}>
              <select
                value={selectedDevice}
                onChange={e => setSelectedDevice(e.target.value)}
                className="w-full max-w-xs md:max-w-sm px-4 py-2 border border-gray-200 rounded-l-lg focus:ring-2 focus:ring-[#0033cc] focus:outline-none text-gray-700 shadow"
              >
                <option value="" disabled>Select your device</option>
                {deviceList.map(device => (
                  <option key={device} value={device}>{device}</option>
                ))}
              </select>
              <button
                type="submit"
                className="px-5 py-2 bg-[#0033cc] text-white font-semibold rounded-r-lg hover:bg-[#0022aa] shadow"
                disabled={!selectedDevice}
              >
                Go
              </button>
            </form>
            <button
              onClick={handleRepair}
              className="px-7 py-3 text-white font-bold bg-[#0033cc] rounded-[10px] hover:bg-[#0022aa] mx-auto md:mx-0"
            >
              Book a Repair
            </button>
          </div>
          <div className="w-[10px] bg-[#0033cc] rounded-[20px]"></div>
          <div className="flex-1 bg-[#e4e9fb] flex items-center justify-center">
            <div className="w-[340px] overflow-hidden">
              <div ref={trackRef} className="flex">
                {deviceImgs.concat(deviceImgs).map((src, i) => (
                  <img key={i} src={src} alt="device" className="w-[320px] h-auto flex-shrink-0 mr-5" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-8 px-8 py-4 bg-[#7a9cd7f6] flex-wrap -mt-44">
        <div className="bg-white rounded-[20px] shadow-lg w-[280px] p-8 text-center hover:-translate-y-1 transition-transform">
          <i className="fas fa-tools text-[28px] text-[#333] mb-4"></i>
          <h4 className="text-lg font-bold text-[#333] mb-2">Trusted Professionals</h4>
          <p className="text-sm text-[#555] leading-[1.5] font-[poppins] text-center">
            Rely on our team of professional technicians. We have a vast network of experts ready to assist you.
          </p>
        </div>
        <div className="bg-white rounded-[20px] shadow-lg w-[280px] p-8 text-center hover:-translate-y-1 transition-transform">
          <i className="fas fa-sync-alt text-[28px] text-[#333] mb-4"></i>
          <h4 className="text-lg font-bold text-[#333] mb-2">Quick Turnaround</h4>
          <p className="text-sm text-[#555] leading-[1.5] font-[poppins] text-center">
            We aim to return your device as swiftly as possible.
          </p>
        </div>
        <div className="bg-white rounded-[20px] shadow-lg w-[280px] p-8 text-center hover:-translate-y-1 transition-transform">
          <i className="fas fa-cogs text-[28px] text-[#333] mb-4"></i>
          <h4 className="text-lg font-bold text-[#333] mb-2">Repair</h4>
          <p className="text-sm text-[#555] leading-[1.5] font-[poppins] text-center">
            Unsure about the issue with your device? Don't worry, we often complete repairs in 30 minutes or less.
          </p>
        </div>
      </div>
      <section className="text-center px-8 py-12 bg-gradient-to-b from-[#a0bce0] to-[#7c8fb5] text-[#0a4858]">
        <h2 className="text-2xl text-[#114f65] mb-10">All kinds of repairs</h2>
        <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(180px,1fr))] max-w-[1000px] mx-auto">
          <div className="bg-white rounded-[20px] p-8 shadow-md flex flex-col justify-between items-center text-center h-[250px] hover:-translate-y-1 transition-transform">
            <img src={iphone} alt="iPhone" className="w-[80px] mb-1" />
            <h4 className="text-base font-medium text-[#111] mb-2">IPHONE</h4>
            <p className="text-base text-[#333] leading-[1.45] font-[segoe ui] text-center">
              Cracked screens, water damage, battery problems, and more.
            </p>
          </div>
          <div className="bg-white rounded-[20px] p-8 shadow-md flex flex-col justify-between items-center text-center h-[250px] hover:-translate-y-1 transition-transform">
            <img src={Ipad} alt="iPad" className="w-[80px] mb-1" />
            <h4 className="text-base font-medium text-[#111] mb-2">IPAD</h4>
            <p className="text-base text-[#333] leading-[1.45] font-[segoe ui] text-center">
              Cracked screens, battery problems, and software issues.
            </p>
          </div>
          <div className="bg-white rounded-[20px] p-8 shadow-md flex flex-col justify-between items-center text-center h-[250px] hover:-translate-y-1 transition-transform">
            <img src={android} alt="Android phone" className="w-[80px] mb-1" />
            <h4 className="text-base font-medium text-[#111] mb-2">ANDROID</h4>
            <p className="text-base text-[#333] leading-[1.45] font-[segoe ui] text-center">
              We can do complex repairs like motherboard replacements.
            </p>
          </div>
          <div className="bg-white rounded-[20px] p-8 shadow-md flex flex-col justify-between items-center text-center h-[250px] hover:-translate-y-1 transition-transform">
            <img src={tablet} alt="Tablet" className="w-[80px] mb-1" />
            <h4 className="text-base font-medium text-[#111] mb-2">TABLET</h4>
            <p className="text-base text-[#333] leading-[1.45] font-[segoe ui] text-center">
              Fast and cost-effective solutions for all kinds of tablets.
            </p>
          </div>
        </div>
      </section>
      <section className="rounded-[50px] my-16 px-10 py-12 max-w-[1100px] mx-auto text-center bg-gradient-to-b from-[#778094] to-[#4d5a8d]">
        <h3 className="text-xl mb-6 text-[#302b2b]">Get Your Mobile Device Repaired Today!</h3>
        <p className="text-lg max-w-[800px] mx-auto mb-9 text-[#d8cfcf] leading-[1.6] text-center">
          We use only the highest-quality parts and offer a wide range of repair services, from simple screen
          replacements to complex motherboard repairs. We also offer same-day repairs in most cases!
        </p>
        <button
          onClick={handleRepair}
          className="px-9 py-3 rounded-full bg-[#0039d4] text-white font-semibold text-base hover:bg-[#0028a5]"
        >
          Book a Repair
        </button>
      </section>
    </>
  );
};

export default Home;
