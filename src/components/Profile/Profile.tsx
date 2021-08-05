import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className="content">
            <div className={s.content}>
                <img src="https://buddy.ghostpool.com/wp-content/uploads/photodune-3382849-mountain3-s1-1003x480.jpg"
                     alt=""/>
            </div>
            <div className={s.post}>
                <h3>Latest Activity</h3>
            <div>
                Avatar+Description
            </div>
                <MyPosts/>
        </div>
        </div>
    );
};

export default Profile;