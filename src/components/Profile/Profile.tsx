import React from 'react';
import MyPosts, {MyPostsPropsType} from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props: MyPostsPropsType) => {

    return (
        <div className="content">
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
};

export default Profile;