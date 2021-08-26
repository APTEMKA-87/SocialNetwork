import React from 'react';
import s from './Post.module.css'

type MessagePostPropsType = {
    postFromPost: string
    likeCount: number
}

const Post: React.FC<MessagePostPropsType>= (props) => {
    return (
        <div className={s.post}>
            <img src={'/img/avatar.png'} alt=''/>
            {props.postFromPost}
            <div>
                <span>like</span>
                {props.likeCount}
            </div>
        </div>
    );
};

export default Post;