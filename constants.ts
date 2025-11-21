import { ButtonConfig, ButtonType } from './types';

export const TOP_FUNC_BUTTONS: ButtonConfig[] = [
  { label: 'SHIFT', value: 'SHIFT', type: ButtonType.NAV, color: 'bg-yellow-600 text-white' },
  { label: 'ALPHA', value: 'ALPHA', type: ButtonType.NAV, color: 'bg-red-600 text-white' },
  { label: 'MODE', value: 'MODE', type: ButtonType.NAV, color: 'bg-gray-700 text-white' },
  { label: 'ON', value: 'AC', type: ButtonType.ACTION, color: 'bg-gray-700 text-white' },
];

export const SCI_BUTTONS: ButtonConfig[] = [
  { label: 'x⁻¹', subLabel: '!', value: 'inv', type: ButtonType.FUNCTION },
  { label: 'nCr', subLabel: 'nPr', value: 'nCr', type: ButtonType.FUNCTION },
  { label: 'Pol', subLabel: 'Rec', value: 'pol', type: ButtonType.FUNCTION },
  { label: 'x³', subLabel: '³√', value: '^3', type: ButtonType.FUNCTION },
  
  { label: 'ab/c', value: 'frac', type: ButtonType.FUNCTION },
  { label: '√', subLabel: '', value: 'sqrt(', type: ButtonType.FUNCTION },
  { label: 'x²', subLabel: '', value: '^2', type: ButtonType.FUNCTION },
  { label: '^', subLabel: 'x√', value: '^', type: ButtonType.FUNCTION },
  { label: 'log', subLabel: '10^x', value: 'log(', type: ButtonType.FUNCTION },
  { label: 'ln', subLabel: 'e^x', value: 'ln(', type: ButtonType.FUNCTION },

  { label: '(-)', subLabel: 'A', value: '-', type: ButtonType.OPERATOR },
  { label: '°\'"', subLabel: 'B', value: 'deg', type: ButtonType.FUNCTION },
  { label: 'hyp', subLabel: 'C', value: 'hyp', type: ButtonType.FUNCTION },
  { label: 'sin', subLabel: 'sin⁻¹', value: 'sin(', type: ButtonType.FUNCTION },
  { label: 'cos', subLabel: 'cos⁻¹', value: 'cos(', type: ButtonType.FUNCTION },
  { label: 'tan', subLabel: 'tan⁻¹', value: 'tan(', type: ButtonType.FUNCTION },

  { label: 'RCL', subLabel: 'STO', value: 'rcl', type: ButtonType.MEMORY },
  { label: 'ENG', subLabel: '←', value: 'eng', type: ButtonType.FUNCTION },
  { label: '(', subLabel: '', value: '(', type: ButtonType.OPERATOR },
  { label: ')', subLabel: 'X', value: ')', type: ButtonType.OPERATOR },
  { label: ',', subLabel: 'Y', value: ',', type: ButtonType.OPERATOR },
  { label: 'M+', subLabel: 'M-', value: 'm+', type: ButtonType.MEMORY },
];

export const NUM_BUTTONS: ButtonConfig[] = [
  { label: '7', value: '7', type: ButtonType.NUMBER },
  { label: '8', value: '8', type: ButtonType.NUMBER },
  { label: '9', value: '9', type: ButtonType.NUMBER },
  { label: 'DEL', subLabel: 'INS', value: 'DEL', type: ButtonType.ACTION, color: 'bg-orange-600 text-white' },
  { label: 'AC', subLabel: 'OFF', value: 'AC', type: ButtonType.ACTION, color: 'bg-orange-600 text-white' },
  
  { label: '4', value: '4', type: ButtonType.NUMBER },
  { label: '5', value: '5', type: ButtonType.NUMBER },
  { label: '6', value: '6', type: ButtonType.NUMBER },
  { label: '×', value: '*', type: ButtonType.OPERATOR },
  { label: '÷', value: '/', type: ButtonType.OPERATOR },

  { label: '1', value: '1', type: ButtonType.NUMBER },
  { label: '2', value: '2', type: ButtonType.NUMBER },
  { label: '3', value: '3', type: ButtonType.NUMBER },
  { label: '+', value: '+', type: ButtonType.OPERATOR },
  { label: '-', value: '-', type: ButtonType.OPERATOR },

  { label: '0', value: '0', type: ButtonType.NUMBER },
  { label: '.', value: '.', type: ButtonType.NUMBER },
  { label: 'EXP', subLabel: 'π', value: 'e', type: ButtonType.FUNCTION },
  { label: 'Ans', subLabel: 'DRG', value: 'Ans', type: ButtonType.ACTION },
  { label: '=', subLabel: '%', value: '=', type: ButtonType.ACTION },
];