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
}

const SEND_MESSAGE = 'SEND_MESSAGE'

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
}

const DialogsReducer = (state: DialogPageType = initialState, action: ActionsDialogsType) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}]
            }
        default:
            return state
    }
}

type ActionsDialogsType = addButtonMessageACType

export type addButtonMessageACType = ReturnType<typeof sendMessage>

export const sendMessage = (newMessageBody: string) => ({type: SEND_MESSAGE, newMessageBody} as const)

export default DialogsReducer;