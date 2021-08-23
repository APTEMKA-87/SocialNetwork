import React from 'react';
import MyPosts, {MyPostsPropsType} from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props: MyPostsPropsType) => {

    /*let posts = [                             // перенесли в App
        {id: 1, post: 'Hi', likesCount: 0},
        {id: 2, post: 'Bye', likesCount: 10}
    ]*/

    return (
        <div className="content">
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
};

export default Profile;