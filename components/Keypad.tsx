import React from 'react';
import { TOP_FUNC_BUTTONS, SCI_BUTTONS, NUM_BUTTONS } from '../constants';
import Button from './Button';
import { ButtonConfig } from '../types';

interface KeypadProps {
  onPress: (val: string) => void;
}

const Keypad: React.FC<KeypadProps> = ({ onPress }) => {
  return (
    <div className="flex flex-col gap-4 px-4 pb-6">
        {/* Top Navigation Row */}
        <div className="grid grid-cols-6 gap-2 mb-2">
           <div className="col-span-6 grid grid-cols-4 gap-3 px-2">
             {TOP_FUNC_BUTTONS.map((btn) => (
               <Button key={btn.label} config={btn} onClick={onPress} />
             ))}
           </div>
        </div>

        {/* Scientific Functions Grid */}
        <div className="grid grid-cols-5 gap-x-3 gap-y-2 mb-4">
            {SCI_BUTTONS.map((btn) => (
                <Button key={btn.label} config={btn} onClick={onPress} />
            ))}
        </div>

        {/* Numeric Pad Grid */}
        <div className="grid grid-cols-5 gap-x-3 gap-y-3">
            {NUM_BUTTONS.map((btn) => (
                <Button key={btn.label} config={btn} onClick={onPress} />
            ))}
        </div>
    </div>
  );
};

export default Keypad;