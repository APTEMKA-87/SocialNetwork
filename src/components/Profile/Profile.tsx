import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

/*type PropsType = {
    store: Store
}*/

const Profile = () => {
    return (
        <div className="content">
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;