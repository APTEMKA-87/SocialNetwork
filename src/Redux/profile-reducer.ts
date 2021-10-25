export type PostsType = {
    id: number
    post: string
    likesCount: number
}

export type ProfileInitialStateType = {
    posts: Array<PostsType>
    newPostText: string
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
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

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
    newPostText: '',
    profile: null
}

const ProfileReducer = (state = initialState, action: ActionsProfileType): ProfileInitialStateType => {
        switch (action.type) {
            case ADD_POST: {
                let newPost: PostsType = {
                    id: 5,
                    post: state.newPostText,
                    likesCount: 0
                }
                return {
                    ...state,
                    posts: [...state.posts, newPost],
                    newPostText: ''
                }
            }
            case UPDATE_NEW_POST_TEXT: {
                return {
                    ...state,
                    newPostText: action.newText
                }
            }
            case SET_USER_PROFILE: {
                return {
                    ...state,
                    profile: action.profile
                }
            }
            default:
                return state
        }
    }
;

export type ActionsProfileType = onPostChangeACType | addButtonPostACType | setUserProfileACType

export type onPostChangeACType = ReturnType<typeof onPostChange>
export type addButtonPostACType = ReturnType<typeof addPost>
export type setUserProfileACType = ReturnType<typeof setUserProfile>

export const addPost = () => ({type: ADD_POST} as const)
export const onPostChange = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText: newText} as const)
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)               // типизировать json приходящего объекта профайл

export default ProfileReducer;