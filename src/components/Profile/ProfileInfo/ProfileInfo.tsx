import React from 'react';
import s from '../Profile.module.css';
import Preloader from '../../common/Preloader/preloader';

type ProfileInfoPropsType = {

}

const ProfileInfo = (props: any) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.content}>
                <img src="https://buddy.ghostpool.com/wp-content/uploads/photodune-3382849-mountain3-s1-1003x480.jpg"
                     alt=""/>
            </div>
            <div className={s.post}>
                <h3>Latest Activity</h3>
                <div>
                    <img src={props.profile.photos.large}/>
                    Avatar+Description
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;