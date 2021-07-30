import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className="content">
            <div className={s.content}>
                <img src="https://buddy.ghostpool.com/wp-content/uploads/photodune-3382849-mountain3-s1-1003x480.jpg"
                     alt=""/>
            </div>
            <div>
                Avatar+Description
            </div>
            <div>
                My Post
            </div>
            <div>
                New Post
            </div>
            <div>Post 1</div>
            <div>Post 2</div>
        </div>
    );
};

export default Profile;