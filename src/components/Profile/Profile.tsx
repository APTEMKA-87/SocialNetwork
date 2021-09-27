import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionTypes, ProfilePageType} from '../../Redux/State';
import MyPostsContainer from './MyPosts/MyPostsContainer';

type PropsType = {
    profilePage: ProfilePageType,
    dispatch: (action: ActionTypes) => void
}

const Profile: React.FC<PropsType> = (props) => {
    return (
        <div className="content">
            <ProfileInfo/>
            <MyPostsContainer profilePage={props.profilePage} dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;