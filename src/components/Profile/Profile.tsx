import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionTypes, ProfilePageType} from '../../Redux/Store';

type PropsType = {
    profilePage: ProfilePageType,
    dispatch: (action: ActionTypes) => void

}

const Profile: React.FC<PropsType> = (props) => {

    return (
        <div className="content">
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
};

export default Profile;