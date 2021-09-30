import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {Store} from 'redux';
import MyPostsContainer from './MyPosts/MyPostsContainer';

type PropsType = {
    store: Store
}

const Profile: React.FC<PropsType> = (props) => {
    return (
        <div className="content">
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
            />
        </div>
    );
};

export default Profile;