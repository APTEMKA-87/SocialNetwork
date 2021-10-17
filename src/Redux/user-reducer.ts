type PhotosType = {
    small: string
    large: string
}

export type UserType = {   // где должна быть эта типизация?
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    status: string
}

export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currenPage: number
}

const initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 21,
    currenPage: 2
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

const usersReducer = (state: UsersType = initialState, action: ActionsUsersType): UsersType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currenPage: action.currenPage}
        }
        default:
            return state
    }
}

export type ActionsUsersType = followACType
    | unfollowACType
    | setUsersACType
    | setCurrentPageACType

export type followACType = ReturnType<typeof followAC>
export type unfollowACType = ReturnType<typeof unfollowAC>
export type setUsersACType = ReturnType<typeof setUsersAC>
export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export const setCurrentPageAC = (currenPage: number) => ({type: SET_CURRENT_PAGE, currenPage} as const)

export default usersReducer