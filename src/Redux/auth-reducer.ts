type initialStateType = {
    id: number | null
    email: string | null
    login: string | null
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
                ...state,
                ...action.data
            }
    }
}

export type ActionAuthType = setUserDataACType

export type setUserDataACType = ReturnType<typeof setUserData>

export const setUserData = (id: number, email: string, login: string) => ({
    type: SET_USER_DATA,
    data: {id, email, login}
} as const)

export default authReducer;