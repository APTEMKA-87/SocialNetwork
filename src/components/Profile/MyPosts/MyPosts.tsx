import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

export type PostsType = {
    id: number,
    post: string,
    likesCount: number
}

export type MyPostsPropsType = {
    posts: Array<PostsType>,
    newPostText: string,
    onPostChange: (text: string) => void
    addPost: () => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElement =
        props.posts.map(p => <Post postFromPost={p.post} key={p.id} likeCount={p.likesCount}/>)

    let addButtonPost = () => {
        props.addPost()
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onPostChange(e.currentTarget.value)
    }

    return (
        <div className={s.post}>
            <div className={s.addPost}>
                <textarea className={s.textArea}
                          onChange={onPostChange}
                          value={props.newPostText}/>
                <button className={s.button} onClick={addButtonPost}>Add Post</button>
            </div>
            {postsElement}
        </div>
    );
};

export default MyPosts;