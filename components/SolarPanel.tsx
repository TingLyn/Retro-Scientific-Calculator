import React from 'react';

const SolarPanel: React.FC = () => {
  return (
    <div className="flex justify-end mb-4 pr-2">
      <div className="w-32 h-10 bg-[#3a322b] rounded border border-gray-600 grid grid-cols-4 gap-[1px] p-[2px] shadow-inner opacity-90">
        <div className="bg-[#4a3e36]"></div>
        <div className="bg-[#4a3e36]"></div>
        <div className="bg-[#4a3e36]"></div>
        <div className="bg-[#4a3e36]"></div>
      </div>
    </div>
  );
};

export default SolarPanel;