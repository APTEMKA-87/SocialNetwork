import React from 'react';
import s from './Post.module.css'

type MessageType = {
    message: string
}

const Post: React.FC<MessageType>= (props) => {
    return (
        <div className={s.post}>
            <img src={'/img/avatar.png'} alt=''/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    );
};

export default Post;