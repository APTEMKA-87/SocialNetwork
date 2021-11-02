import {Dispatch} from 'redux';
import {authAPI} from '../api/api';

export type initialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const SET_USER_DATA = 'SET_USER_DATA'

const authReducer = (state: initialStateType = initialState, action: ActionAuthType): initialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default:
            return state
    }
}

export type ActionAuthType = setUserDataACType

export type setUserDataACType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (id: number, email: string, login: string) => ({
    type: SET_USER_DATA,
    data: {id, email, login}
} as const)

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {userId, email, login} = response.data.data
                dispatch(setAuthUserData(userId, email, login))
            }
        });
}

export default authReducer;