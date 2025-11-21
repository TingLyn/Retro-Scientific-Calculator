import React from 'react';
import { ButtonConfig, ButtonType } from '../types';

interface ButtonProps {
  config: ButtonConfig;
  onClick: (value: string) => void;
}

const Button: React.FC<ButtonProps> = ({ config, onClick }) => {
  const baseStyle = "relative rounded-md flex items-center justify-center font-bold text-sm transition-transform active:scale-95 active:shadow-none select-none";
  
  // Casio-style button aesthetics (Top bevel, distinct shape)
  const shapeStyle = "h-10 w-full shadow-[0_3px_0_rgb(0,0,0,0.3)] border-b-2 border-r-2 border-black/20 before:content-[''] before:absolute before:top-0 before:right-0 before:w-full before:h-[40%] before:bg-white/10 before:rounded-t-md";

  let colorStyle = "bg-[#333] text-white"; // Default dark function keys

  if (config.type === ButtonType.NUMBER) {
    colorStyle = "bg-[#e6e6e6] text-black shadow-[0_3px_0_#999]";
  } else if (config.type === ButtonType.ACTION) {
     // AC / DEL
    colorStyle = config.color || "bg-[#d66a47] text-white shadow-[0_3px_0_#913d22]";
  } else if (config.color) {
    colorStyle = config.color;
  }

  return (
    <div className="flex flex-col items-center gap-1">
        {/* Sub-label (Shift function) */}
        <span className="text-[10px] text-[#d66a47] font-bold h-3 w-full text-center overflow-hidden">
            {config.subLabel}
        </span>
        
        <button
          className={`${baseStyle} ${shapeStyle} ${colorStyle}`}
          onClick={() => onClick(config.value)}
        >
          {config.label}
        </button>
    </div>
  );
};

export default Button;