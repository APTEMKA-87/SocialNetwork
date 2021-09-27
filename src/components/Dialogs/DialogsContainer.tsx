import React from 'react';
import Dialogs from './Dialogs';
import {ActionTypes} from '../../Redux/State';
import {addButtonMessageAC} from '../../Redux/dialogs-reducer';
import {RootStoreType} from '../../Redux/redux-store';

type DialogsContainerPropsType = {
    updateNewMessage: any,
    sendMessage: any,
    dispatch: (actions: ActionTypes) => void,
    store: any
}

const DialogsContainer = (props: DialogsContainerPropsType) => {

    let state = props.store.getState().dialogPage

    let onSendMessage = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (body: string) => {
        props.updateNewMessage(body)
    }

    return (
        <div>
            <Dialogs updateNewMessage={onNewMessageChange}
                     sendMessage={onSendMessage}
                     dialogPage={state}
            />
        </div>
    );
};

export default DialogsContainer;