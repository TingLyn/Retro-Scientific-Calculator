export enum ButtonType {
  NUMBER = 'NUMBER',
  OPERATOR = 'OPERATOR',
  FUNCTION = 'FUNCTION', // sin, cos, log, etc.
  ACTION = 'ACTION',     // AC, DEL, =, ANS
  MEMORY = 'MEMORY',     // M+, M-
  NAV = 'NAV',           // Shift, Alpha (visual mostly for this demo)
}

export enum CalculatorMode {
  DEG = 'DEG',
  RAD = 'RAD',
}

export interface CalculatorState {
  expression: string;     // Top line (formula)
  result: string;         // Bottom line (current input or answer)
  previousAnswer: string; // Ans memory
  memoryValue: number;    // M memory
  mode: CalculatorMode;   // DEG or RAD
  isShift: boolean;       // Shift key toggle
  error: boolean;
}

export interface ButtonConfig {
  label: string;
  subLabel?: string; // Text above the button (Shift function)
  value: string;
  type: ButtonType;
  color?: string; // Custom color override
  cols?: number; // Column span
}