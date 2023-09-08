import React from 'react';
import { useSelector } from 'react-redux';

const Posts = () => {
    const posts = useSelector((store) => store.posts);
    console.log(posts);
    return (
        <div>Posts</div>
    )
}

export default Posts