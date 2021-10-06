export type DialogsType = {
    id: number,
    name: string
}

export type MessagesType = {
    id: number,
    message: string
}

export  type DialogPageType = {
    dialogs: Array<DialogsType>,
    messages: Array<MessagesType>
    newMessage: string
}

const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'

let initialState = {
    dialogs: [
        {id: 1, name: 'Bob'},
        {id: 2, name: 'Den'},
        {id: 3, name: 'Victor'},
        {id: 4, name: 'Valera'},
        {id: 5, name: 'Bill'},
        {id: 6, name: 'Anna'}
    ],

    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How r u?'},
        {id: 3, message: 'Thank`s'}
    ],
    newMessage: ''
}

const DialogsReducer = (state: DialogPageType = initialState, action: ActionsDialogsType) => {

    let stateCopy = {
        ...state,
    }

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            stateCopy.newMessage = action.body
            return stateCopy
        case SEND_MESSAGE:
            let body = state.newMessage
            stateCopy.newMessage = ''
            stateCopy.messages.push({id: 4, message: body})
            return stateCopy
        default:
            return state
    }
}

export type ActionsDialogsType = addButtonMessageACType | updateNewMessageACType

export type addButtonMessageACType = ReturnType<typeof addButtonMessageAC>
export type updateNewMessageACType = ReturnType<typeof updateNewMessageBodyAC>

export const addButtonMessageAC = () => ({type: SEND_MESSAGE} as const)
export const updateNewMessageBodyAC = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body})

export default DialogsReducer;