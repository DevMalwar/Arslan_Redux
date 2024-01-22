import { createStore } from 'redux';
import { calculatorReducer } from '../reducer/calculatorReducer';

const store = createStore(calculatorReducer);

export default store;
