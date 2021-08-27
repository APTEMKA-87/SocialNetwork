import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostsType} from '../../Redux/State';

type PropsType = {
    posts: Array<PostsType>
    addPost: (postText: string) => void

}

const Profile: React.FC<PropsType> = (props ) => {

    return (
        <div className="content">
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
};

export default Profile;