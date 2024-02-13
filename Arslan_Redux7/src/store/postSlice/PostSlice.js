import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getPosts = createAsyncThunk(
    'get',
    async function(info, { dispatch }) {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        
        const formattedData = data.map((item, index) => ({
            userId: 1,
            id: item.id,
            title: item.title,
            completed: item.completed,
            index: index + 1
        }));

        dispatch(postsInfo(formattedData));
    }
);

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState: {
        posts: [],
    },
    reducers: {
        postsInfo: (state, action) => {
            state.posts = action.payload;
        },
    },
});

export const { postsInfo } = postsSlice.actions;
export default postsSlice.reducer;
