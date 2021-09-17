import {ActionTypes, DialogPageType, MessagesType} from './State';

const ADD_DIALOG = 'ADD-DIALOG'

const DialogsReducer = (state: DialogPageType, action: ActionTypes) => {
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