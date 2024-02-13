import React from 'react';
import './App.css';
import PostPage from './postPage/PostPage';
import { Provider } from 'react-redux';
import { store } from './store/store';

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <PostPage />
            </div>
        </Provider>
    );
};

export default App;