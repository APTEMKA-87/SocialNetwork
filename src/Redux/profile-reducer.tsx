import {ActionTypes, PostsType, ProfilePageType} from './State';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const ProfileReducer = (state: ProfilePageType, action: ActionTypes) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostsType = {
                id: 5,
                post: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
    }
    return state
    }
;

export const addButtonPostAC = () => ({type: ADD_POST} as const)
export const onPostChangeAC = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText} as const)

export default ProfileReducer;