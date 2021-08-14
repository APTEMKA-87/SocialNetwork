import React from 'react';
import s from '../Profile.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.content}>
                <img src="https://buddy.ghostpool.com/wp-content/uploads/photodune-3382849-mountain3-s1-1003x480.jpg"
                     alt=""/>
            </div>
            <div className={s.post}>
                <h3>Latest Activity</h3>
                <div>
                    Avatar+Description
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;