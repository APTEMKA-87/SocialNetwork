import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.post}>
            <div>
                New Post
            </div>
            <div>
                <textarea/>
                <button>Add Post</button>
            </div>
            <Post message = 'Hi' likeCount={0}/>
            <Post message= 'Bye' likeCount={10}/>
        </div>
    );
};

export default MyPosts;