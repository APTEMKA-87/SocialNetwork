import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {Store} from 'redux';
import {RootStoreType} from '../../Redux/redux-store';
import MyPostContainer from './MyPosts/MyPostContainer';

type PropsType = {
    store: Store<RootStoreType, any>

}

const Profile: React.FC<PropsType> = (props) => {

    return (
        <div className="content">
            <ProfileInfo/>
            <MyPostContainer
                store={props.store}
            />

        </div>
    );
};

export default Profile;