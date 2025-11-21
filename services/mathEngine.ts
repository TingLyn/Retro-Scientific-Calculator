import { CalculatorMode } from '../types';

// Factorial helper
const factorial = (n: number): number => {
  if (n < 0) return NaN;
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
};

// Combination nCr
const nCr = (n: number, r: number): number => {
  if (r < 0 || r > n) return 0;
  return factorial(n) / (factorial(r) * factorial(n - r));
};

// Custom Math Scope Factory
const createMathScope = (mode: CalculatorMode, ans: number, memory: number) => {
  const isDeg = mode === CalculatorMode.DEG;
  const toRad = (deg: number) => deg * (Math.PI / 180);
  const toDeg = (rad: number) => rad * (180 / Math.PI);

  return {
    // Constants
    PI: Math.PI,
    E: Math.E,
    Ans: ans,
    M: memory,
    
    // Basic Ops replacements
    add: (a: number, b: number) => a + b,
    sub: (a: number, b: number) => a - b,
    mul: (a: number, b: number) => a * b,
    div: (a: number, b: number) => a / b,

    // Trig (Dependent on Mode)
    sin: (x: number) => Math.sin(isDeg ? toRad(x) : x),
    cos: (x: number) => Math.cos(isDeg ? toRad(x) : x),
    tan: (x: number) => Math.tan(isDeg ? toRad(x) : x),
    
    // Inverse Trig (Result depends on Mode)
    asin: (x: number) => isDeg ? toDeg(Math.asin(x)) : Math.asin(x),
    acos: (x: number) => isDeg ? toDeg(Math.acos(x)) : Math.acos(x),
    atan: (x: number) => isDeg ? toDeg(Math.atan(x)) : Math.atan(x),

    // Logarithms
    log: (x: number) => Math.log10(x),
    ln: (x: number) => Math.log(x),
    
    // Powers/Roots
    sqrt: Math.sqrt,
    pow: Math.pow,
    cbrt: Math.cbrt,
    
    // Misc
    abs: Math.abs,
    fact: factorial,
    nCr: nCr,
    pol: (x: number, y: number) => Math.sqrt(x*x + y*y), // Simple magnitude for now
  };
};

export const evaluateExpression = (expression: string, mode: CalculatorMode, ans: number, memory: number): string => {
  try {
    // Pre-processing expression to match JS syntax
    let sanitized = expression
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/\^/g, '**')
      .replace(/π/g, 'PI')
      .replace(/e/g, 'E')
      .replace(/√\(/g, 'sqrt(')
      .replace(/sin\(/g, 'sin(')
      .replace(/cos\(/g, 'cos(')
      .replace(/tan\(/g, 'tan(')
      .replace(/log\(/g, 'log(')
      .replace(/ln\(/g, 'ln(');

    // Handle implicit multiplication for parenthesis e.g. 5(2) -> 5*(2)
    sanitized = sanitized.replace(/(\d)(\()/g, '$1*$2');
    sanitized = sanitized.replace(/(\))(\d)/g, '$1*$2');
    sanitized = sanitized.replace(/(\))(\()/g, '$1*$2');

    // Create the scope function
    const scope = createMathScope(mode, ans, memory);
    
    // Security: We construct a function with limited scope arguments.
    // This is safer than direct eval() because we control variables.
    // However, strictly speaking, Function constructor still allows arbitrary code if user types formatted strings.
    // For a client-side calculator, this is acceptable risk if we validate chars.
    
    // Mapping keys from scope to args
    const keys = Object.keys(scope);
    const values = Object.values(scope);
    
    // eslint-disable-next-line no-new-func
    const calcFunc = new Function(...keys, `"use strict"; return (${sanitized})`);
    
    const result = calcFunc(...values);

    if (!isFinite(result) || isNaN(result)) {
      return "Math Error";
    }

    // Format Result
    // If it's a huge number or tiny float, use scientific notation
    if (Math.abs(result) > 1000000000 || (Math.abs(result) < 0.0000001 && result !== 0)) {
      return result.toExponential(8).replace('e+', 'e');
    }
    
    // Round to avoid floating point errors like 0.1 + 0.2
    return String(Math.round(result * 10000000000) / 10000000000);

  } catch (e) {
    // console.error(e);
    return "Syntax Error";
  }
};