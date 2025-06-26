"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const batteryImg = "/devices/battery.png";
const brokenscreenImg = "/devices/brokenscreen.png";

const issueOptions = [
  { label: "Battery", img: batteryImg },
  { label: "Broken Screen", img: brokenscreenImg },
  { label: "Charging Port", icon: "🔌" },
  { label: "Camera Lens", icon: "📷" },
  { label: "Free Diagnostic", icon: "🩺" },
];

const Repair: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);
  const [otherIssue, setOtherIssue] = useState("");
  const [error, setError] = useState("");

  // On mount, check for device param and pre-select/highlight
  useEffect(() => {
    const device = searchParams.get("device");
    if (device) {
      // Try to match to an issue option (case-insensitive)
      const match = issueOptions.find(opt => opt.label.toLowerCase() === device.toLowerCase());
      if (match) {
        setSelectedIssue(match.label);
        setOtherIssue("");
      } else if (device.trim().toLowerCase() === "other") {
        setSelectedIssue(null);
        setOtherIssue("");
      } else {
        setSelectedIssue(null);
        setOtherIssue("");
      }
    } else {
      setSelectedIssue(null);
      setOtherIssue("");
    }
  }, [searchParams]);

  const deviceParam = searchParams.get("device");

  const handleBack = () => router.back();
  const handleContinue = () => {
    if (!selectedIssue && !otherIssue.trim()) {
      setError("Please select an issue or describe your issue.");
      return;
    }
    setError("");
    router.push("/payment");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eaf1fb] to-[#bac7e9] flex items-center justify-center py-10 px-2">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        {/* Left: Issue selection */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0033cc] mb-2 text-center md:text-left">
            {deviceParam ? `What's wrong with ${deviceParam}?` : 'Book a Repair'}
          </h2>
          <p className="text-lg text-gray-500 mb-8 text-center md:text-left">
            {deviceParam ? 'Select the issue or describe the problem below.' : 'Select the issue with your device or describe it below.'}
          </p>
          {error && <div className="mb-4 text-red-600 text-sm font-semibold text-center md:text-left">{error}</div>}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {issueOptions.slice(0,2).map(opt => (
              <button
                key={opt.label}
                type="button"
                className={`flex flex-col items-center justify-center bg-[#f7faff] hover:bg-[#eaf1fb] rounded-xl p-6 shadow transition group border-2 ${selectedIssue === opt.label ? 'border-[#0033cc] ring-2 ring-[#0033cc]' : 'border-transparent'}`}
                onClick={() => setSelectedIssue(opt.label)}
              >
                {opt.img && <img src={opt.img} alt={opt.label} className="w-14 h-14 mb-2" />}
                {opt.icon && <span className="text-3xl mb-2">{opt.icon}</span>}
                <span className="font-semibold text-[#0033cc] group-hover:underline">{opt.label}</span>
              </button>
            ))}
          </div>
          <div className="flex gap-2 mb-6">
            {issueOptions.slice(2).map(opt => (
              <button
                key={opt.label}
                type="button"
                className={`flex-1 flex flex-col items-center justify-center bg-[#f7faff] hover:bg-[#eaf1fb] rounded-xl p-3 shadow transition group border-2 ${selectedIssue === opt.label ? 'border-[#0033cc] ring-2 ring-[#0033cc]' : 'border-transparent'}`}
                onClick={() => setSelectedIssue(opt.label)}
              >
                {opt.icon && <span className="text-2xl mb-1">{opt.icon}</span>}
                <span className="font-medium text-[#0033cc] text-sm group-hover:underline">{opt.label}</span>
              </button>
            ))}
          </div>
          <textarea
            placeholder="Describe other issues..."
            className="w-full border border-gray-200 rounded-xl p-4 mb-6 shadow focus:ring-2 focus:ring-[#0033cc] focus:outline-none resize-none min-h-[90px]"
            rows={4}
            value={otherIssue}
            onChange={e => setOtherIssue(e.target.value)}
            onFocus={() => setSelectedIssue(null)}
          />
          <div className="flex flex-col md:flex-row gap-4 mt-2">
            <button onClick={handleBack} className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold w-full md:w-auto">Go back</button>
            <button
              className="bg-[#0033cc] hover:bg-[#0022aa] text-white px-6 py-2 rounded-lg font-semibold w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleContinue}
              disabled={!selectedIssue && !otherIssue.trim()}
            >
              Continue
            </button>
          </div>
        </div>
        {/* Right: AI Analyzer */}
        <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-b from-[#eaf1fb] to-[#c3d6f7] p-8 md:p-12 text-center">
          <div className="mb-6">
            <div className="w-28 h-28 rounded-full bg-[#0033cc] bg-opacity-10 flex items-center justify-center mx-auto mb-3">
              <div className="w-16 h-16 rounded-full bg-[#0033cc] flex items-center justify-center">
                <span className="text-4xl text-white font-bold">AI</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#0033cc] mb-2">AI Analyzer</h3>
            <p className="text-gray-600">Our AI will analyze your issue and help us provide the best solution.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repair; 