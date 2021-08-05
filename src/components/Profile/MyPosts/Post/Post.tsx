import React from 'react';
import s from './Post.module.css'

type MessageType = {
    message: string
    likeCount: number
}

const Post: React.FC<MessageType>= (props) => {
    return (
        <div className={s.post}>
            <img src={'/img/avatar.png'} alt=''/>
            {props.message}
            <div>
                <span>like</span>
                {props.likeCount}
            </div>
        </div>
    );
};

export default Post;