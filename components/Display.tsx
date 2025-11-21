import React from 'react';
import { CalculatorState } from '../types';

interface DisplayProps {
  state: CalculatorState;
}

const Display: React.FC<DisplayProps> = ({ state }) => {
  return (
    <div className="bg-[#b6cbb0] p-4 rounded-md mb-6 shadow-[inset_0_2px_6px_rgba(0,0,0,0.3)] border-4 border-gray-600 relative overflow-hidden h-28 flex flex-col justify-between">
        {/* Mode Indicators */}
        <div className="absolute top-1 left-2 text-[10px] text-black font-bold tracking-widest flex gap-2 opacity-80">
            <span className={state.isShift ? "text-black" : "text-transparent"}>S</span>
            <span className={state.memoryValue !== 0 ? "text-black" : "text-transparent"}>M</span>
            <span className={state.mode === 'DEG' ? "text-black font-extrabold" : "text-black/20"}>D</span>
            <span className={state.mode === 'RAD' ? "text-black font-extrabold" : "text-black/20"}>R</span>
            <span className="text-black/20">G</span>
            <span className="text-black/20">FIX</span>
            <span className="text-black/20">SCI</span>
        </div>

        {/* Top Line: Formula */}
        <div className="lcd-text text-black text-lg tracking-widest h-8 flex items-center overflow-x-auto whitespace-nowrap font-medium">
            {state.expression.replace(/\*/g, '×').replace(/\//g, '÷')}
        </div>

        {/* Bottom Line: Result */}
        <div className="lcd-text text-black text-3xl tracking-widest text-right font-bold overflow-hidden whitespace-nowrap">
            {state.result}
        </div>
        
        {/* LCD faint grid texture overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiLz4KPC9zdmc+')]"></div>
    </div>
  );
};

export default Display;