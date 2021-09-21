import {ActionTypes, DialogPageType, MessagesType} from './State';

const ADD_DIALOG = 'ADD-DIALOG'

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
    ]
}

const DialogsReducer = (state: DialogPageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case ADD_DIALOG:
            let newDialog: MessagesType = {
                id: 3,
                message: action.dialogText
            }
            state.messages.push(newDialog)
            break;
    }
    return state
};

export const addButtonMessageAC = (dialogText: string) => ({type: 'ADD-DIALOG', dialogText} as const)

export default DialogsReducer;