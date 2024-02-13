import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../store/postSlice/PostSlice';

const PostPage = () => {
    const { posts } = useSelector(state => state.postsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <div className="post-page-container">
            <div className="post-list">
                {posts.map((post, index) => (
                    <div className="post-item" key={post.id}>
                        <p>userId: {post.userId}</p>
                        <p>id: {post.id}</p>
                        <p>title: {post.title}</p>
                        <p>Index: {index + 1}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostPage;
