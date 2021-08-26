import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

export type PostsType = {
    id: number,
    post: string,
    likesCount: number
}

export type MyPostsPropsType = {
    posts: Array<PostsType>
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElement = props.posts.map(p => <Post postFromPost={p.post} likeCount={p.likesCount}/>)

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