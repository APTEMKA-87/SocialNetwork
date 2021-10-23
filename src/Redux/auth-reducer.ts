type initialStateType = {
    id: null | number
    email: null | string
    login: null | string
}

let initialState = {
    id: null,
    email: null,
    login: null,
}

const SET_USER_DATA = 'SET_USER_DATA'

const authReducer = (state: initialStateType = initialState, action: ActionAuthType) => {
switch (action.type) {
    case 'SET_USER_DATA':
        return {
            ...state
        }
}
}

export type ActionAuthType = setUserDataACType

export type setUserDataACType = ReturnType<typeof setUserData>

export const setUserData = () => ({type: SET_USER_DATA} as const)

export default authReducer;