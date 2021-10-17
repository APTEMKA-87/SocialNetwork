export type DialogsType = {
    id: number,
    name: string
}

export type MessagesType = {
    id: number,
    message: string
}

export type DialogPageType = {
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

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessage: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessage
            return {
                ...state,
                newMessage: '',
                messages: [...state.messages, {id: 4, message: body}]
            }
        default:
            return state
    }
}

export type ActionsDialogsType = addButtonMessageACType | updateNewMessageACType

export type addButtonMessageACType = ReturnType<typeof sendMessage>
export type updateNewMessageACType = ReturnType<typeof updateNewMessageBody>

export const sendMessage = () => ({type: SEND_MESSAGE} as const)
export const updateNewMessageBody = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body})

export default DialogsReducer;