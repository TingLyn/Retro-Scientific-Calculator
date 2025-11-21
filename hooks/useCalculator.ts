import { useState, useCallback } from 'react';
import { CalculatorState, CalculatorMode } from '../types';
import { evaluateExpression } from '../services/mathEngine';

const INITIAL_STATE: CalculatorState = {
  expression: '',
  result: '0',
  previousAnswer: '0',
  memoryValue: 0,
  mode: CalculatorMode.DEG,
  isShift: false,
  error: false,
};

export const useCalculator = () => {
  const [state, setState] = useState<CalculatorState>(INITIAL_STATE);

  const handleInput = useCallback((value: string) => {
    setState((prev) => {
      if (prev.error) {
        return { ...prev, expression: value, error: false, result: '0' };
      }
      return { ...prev, expression: prev.expression + value };
    });
  }, []);

  const handleClear = useCallback(() => {
    setState((prev) => ({
      ...INITIAL_STATE,
      mode: prev.mode,
      previousAnswer: prev.previousAnswer,
      memoryValue: prev.memoryValue
    }));
  }, []);

  const handleDelete = useCallback(() => {
    setState((prev) => ({
      ...prev,
      expression: prev.expression.slice(0, -1),
      error: false
    }));
  }, []);

  const handleModeToggle = useCallback(() => {
    setState((prev) => ({
      ...prev,
      mode: prev.mode === CalculatorMode.DEG ? CalculatorMode.RAD : CalculatorMode.DEG
    }));
  }, []);

  const handleCalculate = useCallback(() => {
    setState((prev) => {
      if (!prev.expression) return prev;

      const resultStr = evaluateExpression(
        prev.expression,
        prev.mode,
        parseFloat(prev.previousAnswer),
        prev.memoryValue
      );

      const isError = resultStr.includes('Error');

      return {
        ...prev,
        result: resultStr,
        previousAnswer: isError ? prev.previousAnswer : resultStr,
        expression: prev.expression, // Keep expression on top line
        error: isError
      };
    });
  }, []);

  const handleMemory = useCallback((op: 'M+' | 'M-' | 'RCL') => {
    setState(prev => {
        // Simple implementation for demo
        if (op === 'M+') {
           // We assume evaluating the current expression to add to memory
           const val = parseFloat(prev.result === '0' ? evaluateExpression(prev.expression, prev.mode, parseFloat(prev.previousAnswer), prev.memoryValue) : prev.result);
           return isNaN(val) ? prev : { ...prev, memoryValue: prev.memoryValue + val, expression: '' }; 
        }
        return prev;
    });
  }, []);

  const triggerAction = useCallback((value: string) => {
    if (value === 'AC') {
      handleClear();
    } else if (value === 'DEL') {
      handleDelete();
    } else if (value === '=') {
      handleCalculate();
    } else if (value === 'Ans') {
      handleInput('Ans');
    } else if (value === 'SHIFT') {
        setState(prev => ({ ...prev, isShift: !prev.isShift }));
    } else if (value === 'MODE') {
        handleModeToggle();
    } else if (value === 'm+') {
        handleMemory('M+');
    } else {
      handleInput(value);
    }
  }, [handleClear, handleDelete, handleCalculate, handleInput, handleModeToggle, handleMemory]);

  return {
    state,
    triggerAction
  };
};