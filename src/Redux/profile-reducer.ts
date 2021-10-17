export type PostsType = {
    id: number
    post: string
    likesCount: number
}

export type ProfileInitialStateType = {
    posts: Array<PostsType>
    newPostText: string
}

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

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
} as ProfileInitialStateType

const ProfileReducer = (state: ProfileInitialStateType = initialState, action: ActionsProfileType): ProfileInitialStateType => {
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
            default:
                return state
        }
    }
;

export type ActionsProfileType = onPostChangeACType | addButtonPostACType

export type onPostChangeACType = ReturnType<typeof onPostChange>
export type addButtonPostACType = ReturnType<typeof addPost>

export const addPost = () => ({type: ADD_POST} as const)
export const onPostChange = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText: newText} as const)

export default ProfileReducer;