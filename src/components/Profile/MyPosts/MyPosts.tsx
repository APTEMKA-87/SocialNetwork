import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {

    let postData = [
        {id: 1, post: 'Hi', likesCount: 0},
        {id: 2, post: 'Bye', likesCount: 10}
    ]

    return (
        <div className={s.post}>
            <div className={s.addPost}>
                <textarea className={s.textArea} placeholder='Your New Post'/>
                <button className={s.button}>Add Post</button>
            </div>
            <Post message={postData[0].post} likeCount={postData[0].likesCount}/>
            <Post message={postData[1].post} likeCount={postData[1].likesCount}/>
        </div>
    );
};

export default MyPosts;