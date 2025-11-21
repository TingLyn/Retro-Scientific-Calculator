import React from 'react';
import Display from './components/Display';
import Keypad from './components/Keypad';
import SolarPanel from './components/SolarPanel';
import { useCalculator } from './hooks/useCalculator';

const App: React.FC = () => {
  const { state, triggerAction } = useCalculator();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400 p-4">
      
      {/* Calculator Body */}
      <div className="relative bg-[#2a2d31] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.2)] w-full max-w-[420px] border-t border-gray-600">
        
        {/* Branding Area */}
        <div className="px-8 pt-8 flex justify-between items-start">
            <div>
                <h1 className="text-gray-300 font-bold text-xl tracking-wider select-none">CASIO</h1>
                <p className="text-gray-400 text-xs font-mono tracking-widest">fx-82MS</p>
                <p className="text-cyan-500 text-[10px] font-bold italic tracking-wider mt-1">S-V.P.A.M.</p>
            </div>
            <SolarPanel />
        </div>

        {/* Screen Section */}
        <div className="px-6 pt-2 pb-4">
            <Display state={state} />
        </div>

        {/* Keypad Section */}
        <Keypad onPress={triggerAction} />

        {/* Bottom Curve Detail */}
        <div className="h-4 rounded-b-3xl w-full bg-[#222529]"></div>
      </div>
    </div>
  );
};

export default App;