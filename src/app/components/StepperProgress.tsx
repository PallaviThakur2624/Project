import React from 'react';
import { VscChevronRight } from "react-icons/vsc";

interface StepperProgressProps {
  currentStep: number;
}

const steps = [
  { label: 'Problem', icon: <VscChevronRight className="w-6 h-6 text-black" /> },
  { label: 'Testing', icon: <VscChevronRight className="w-6 h-6 text-black " /> },
  { label: 'Repair', icon: <VscChevronRight className="w-6 h-6 text-black" /> },
  { label: 'Payment', icon: <VscChevronRight className="w-6 h-6 text-black" /> },
];

const StepperProgress: React.FC<StepperProgressProps> = ({ currentStep }) => {
  return (
    <div className="w-1/2 stick top-[8rem] m-auto flex justify-between mt-6 items-center mb-6 px-2">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;
        return (
          <React.Fragment key={index}>
            {/* Step circle */}
            <div className="flex flex-col items-center relative z-10">
              <div
                className={`flex items-center justify-center w-14 h-14 rounded-full text-white transition-all duration-300 ${
                  isCompleted
                    ? 'bg-red-700'
                    : isCurrent
                    ? 'bg-red-500'
                    : 'bg-gray-300 text-gray-700'
                }`}
              >
                {step.icon}
              </div>
              <span className="text-xs mt-1 text-center text-gray-600">{step.label}</span>
            </div>
            {/* Line */}
            {index < steps.length - 1 && (
              <div className="flex-1 h-1 mx-2 relative">
                <div className="absolute -top-2 left-0 w-full h-1 bg-gray-300 rounded" />
                {currentStep > index && (
                  <div className="absolute -top-2 left-0 h-1 bg-red-600 rounded transition-all duration-300" style={{ width: '100%' }} />
                )}
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StepperProgress; 