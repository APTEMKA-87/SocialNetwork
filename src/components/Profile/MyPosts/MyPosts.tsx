import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        {id: 1, post: 'Hi', likesCount: 0},
        {id: 2, post: 'Bye', likesCount: 10}
    ]

    let postsElement = posts.map( p => <Post message={p.post} likeCount={p.likesCount}/>)

    return (
        <div className={s.post}>
            <div className={s.addPost}>
                <textarea className={s.textArea} placeholder='Your New Post'/>
                <button className={s.button}>Add Post</button>
            </div>
            {postsElement}
        </div>
    );
};

export default MyPosts;