import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../Redux/State';

type PropsType = {
    profilePage: ProfilePageType,
    addPost: (postText: string) => void,
    updateNewPostText: (newText: string) => void

}

const Profile: React.FC<PropsType> = (props ) => {

    return (
        <div className="content">
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                addPost={props.addPost}
                newPostText={props.profilePage.newPostText}
                updateNewPostText = {props.updateNewPostText}
            />
        </div>
    );
};

export default Profile;