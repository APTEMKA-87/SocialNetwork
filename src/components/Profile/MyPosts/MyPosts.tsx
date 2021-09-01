import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

export type PostsType = {
    id: number,
    post: string,
    likesCount: number
}

export type MyPostsPropsType = {
    posts: Array<PostsType>,
    addPost: (postText: string) => void,
    newPostText: string,
    updateNewPostText: (newText: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElement = props.posts.map(p => <Post postFromPost={p.post} likeCount={p.likesCount}/>)  // key

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addButtonPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
        }
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value)

        }
    }

    return (
        <div className={s.post}>
            <div className={s.addPost}>
                <textarea className={s.textArea}
                          onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText}/>
                <button className={s.button} onClick={addButtonPost}>Add Post</button>
            </div>
            {postsElement}
        </div>
    );
};

export default MyPosts;