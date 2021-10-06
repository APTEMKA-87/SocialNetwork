export type LocationType = {
    city: string,
    country: string
}

export type UserType = {
    id: number,
    followed: boolean,
    fullName: string,
    status: string
    location: LocationType
}

export type UsersType = {
    users: Array<UserType>
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [/*
        {
            id: 1,
            followed: false,
            fullName: 'Dima',
            status: 'I am boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            followed: true,
            fullName: 'Bob',
            status: 'I am boss too',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
        {
            id: 3,
            followed: false,
            fullName: 'Don',
            status: 'I am superBoss',
            location: {city: 'Moscow', country: 'Russia'}
        },*/
    ]
}

const usersReducer = (state = initialState, action: ActionsUsersType): UsersType => {
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
        default:
            return state
    }
}

export type ActionsUsersType = followACType | unfollowACType | setUsersACType

export type followACType = ReturnType<typeof followAC>
export type unfollowACType = ReturnType<typeof unfollowAC>
export type setUsersACType = ReturnType<typeof setUsersAC>

export const followAC = (userId: number) => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: any) => ({type: SET_USERS, users})

export default usersReducer