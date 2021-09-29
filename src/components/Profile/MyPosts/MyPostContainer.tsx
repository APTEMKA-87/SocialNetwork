import React from 'react';
import {Store} from 'redux';
import {RootStoreType} from '../../../Redux/redux-store';
import {addButtonPostAC, onPostChangeAC} from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';


type MyPostContainerPropsType = {
    store: Store<RootStoreType, any>      // type
}

const MyPostContainer = (props: MyPostContainerPropsType) => {

    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addButtonPostAC())
    }

    let onPostChange = (text: string) => {
        props.store.dispatch(onPostChangeAC(text))
    }

    return (
        <MyPosts onPostChange={onPostChange}
                 addPost={addPost}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}
        />
    );
};

export default MyPostContainer;