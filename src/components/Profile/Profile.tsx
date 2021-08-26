import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../Redux/State';

const Profile: React.FC<ProfilePageType> = (props ) => {

    return (
        <div className="content">
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
};

export default Profile;