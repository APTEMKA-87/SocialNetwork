import {Dispatch} from 'redux';
import {profileAPI, usersAPI} from '../api/api';

export type PostsType = {
    id: number
    post: string
    likesCount: number
}

export type ProfileInitialStateType = {
    status: string;
    posts: Array<PostsType>
    profile: ProfileType | null
}

export type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string

}

export type PhotosType = {
    small: string
    large: string
}


export type DataType = {
    userId: number
    email: string
    login: string
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
    data: DataType
    resultCode: number

}

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState: ProfileInitialStateType = {
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
    profile: null,
    status: '',
}

const ProfileReducer = (state = initialState, action: ActionsProfileType): ProfileInitialStateType => {
        switch (action.type) {
            case ADD_POST: {
                let newPost: PostsType = {
                    id: 5,
                    post: action.newPostText,
                    likesCount: 0
                }
                return {
                    ...state,
                    posts: [...state.posts, newPost],
                }
            }
            case SET_USER_PROFILE: {
                return {
                    ...state,
                    profile: action.profile
                }
            }
            case SET_STATUS: {
                return {
                    ...state,
                    status: action.status
                }
            }
            default:
                return state
        }
    }
;

export type ActionsProfileType =
    | addButtonPostACType
    | setUserProfileACType
    | setStatusACType

export type addButtonPostACType = ReturnType<typeof addPost>
export type setUserProfileACType = ReturnType<typeof setUserProfile>
export type setStatusACType = ReturnType<typeof setStatus>


export const addPost = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)

export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}

export const getStatus = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}

export default ProfileReducer;