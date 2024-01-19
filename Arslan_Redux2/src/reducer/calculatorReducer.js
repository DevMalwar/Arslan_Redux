import { ADD, SUBTRACT, MULTIPLY, DIVIDE, CLEAR } from '../action/calculatorActions';

const initialState = {
  history: [],
  inputValue: '',
};

const calculatorReducer = (state = initialState, action) => {
  const number = parseFloat(state.inputValue);

  switch (action.type) {
    case ADD:
      return {
        ...state,
        history: [...state.history, isNaN(number) ? 0 : number],
        inputValue: '',
      };

    case SUBTRACT:
      return {
        ...state,
        history: [...state.history, isNaN(number) ? 0 : -number],
        inputValue: '',
      };

    case MULTIPLY:
      return {
        ...state,
        history: [...state.history, state.history.length === 0 ? 0 : state.history[state.history.length - 1] * (isNaN(number) ? 1 : number)],
        inputValue: '',
      };

    case DIVIDE:
      return {
        ...state,
        history: [...state.history, state.history.length === 0 ? 0 : state.history[state.history.length - 1] / (isNaN(number) ? 1 : number)],
        inputValue: '',
      };

    case CLEAR:
      return {
        ...state,
        history: [],
        inputValue: '',
      };

    default:
      return state;
  }
};

export { calculatorReducer, initialState };
