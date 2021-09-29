import {ActionTypes, PostsType, ProfilePageType} from './Store';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {
            id: 1,
            post: 'Hi, my name is Artyom and I Front-end developer. I will be glad to job offers.',
            likesCount: 0
        },
        {
            id: 2, post: 'I’m a person who is addicted to programming. I have experience ' +
                'in creating SPA using React/Redux, JS/TS, HTML/CSS. Now I’m improving ' +
                'my skills and expanding them, learning new technologies. ',
            likesCount: 10
        }
    ],
    newPostText: ''
}

const ProfileReducer = (state: ProfilePageType = initialState, action: ActionTypes): ProfilePageType => {
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