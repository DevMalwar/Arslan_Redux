import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postSlice/PostSlice';

export const store = configureStore({
    reducer: {
        postsReducer,
    },
});