import React from 'react';
import MyPosts from './MyPosts';
import {addButtonPostAC, onPostChangeAC} from '../../../Redux/profile-reducer';
import {ActionTypes, ProfilePageType} from '../../../Redux/State';

export type MyPostsContainerPropsType = {
    profilePage: ProfilePageType,
    dispatch: (actions: ActionTypes) => void
}

const MyPostsContainer = (props: MyPostsContainerPropsType) => {

    let addPost = () => {
        props.dispatch(addButtonPostAC())
    }

    let onPostChange = (text: string) => {
        props.dispatch(onPostChangeAC(text))
    }

    return (
        <div>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
            addPost={addPost}
            onPostChange={onPostChange}/>
        </div>
    );
};

export default MyPostsContainer;