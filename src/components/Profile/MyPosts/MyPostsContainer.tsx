import React from 'react';
import {addButtonPostAC, onPostChangeAC} from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';


/*type MyPostContainerPropsType = {
    store: Store
}*/

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()

                    let addPost = () => {
                        store.dispatch(addButtonPostAC())
                    }

                    let onPostChange = (text: string) => {
                        store.dispatch(onPostChangeAC(text))
                    }
                    return <MyPosts onPostChange={onPostChange}
                                    addPost={addPost}
                                    posts={state.profilePage.posts}
                                    newPostText={state.profilePage.newPostText}/>
                }
            }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;

