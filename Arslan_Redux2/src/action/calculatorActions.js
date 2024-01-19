export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const MULTIPLY = 'MULTIPLY';
export const DIVIDE = 'DIVIDE';
export const CLEAR = 'CLEAR';

export const add = (number) => ({
  type: ADD,
  payload: number
});

export const subtract = (number) => ({
  type: SUBTRACT,
  payload: number
});

export const multiply = (number) => ({
  type: MULTIPLY,
  payload: number
});

export const divide = (number) => ({
  type: DIVIDE,
  payload: number
});

export const clear = () => ({
  type: CLEAR
});
