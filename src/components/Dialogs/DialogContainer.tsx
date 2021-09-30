import React from 'react';
import Dialogs from './Dialogs';
import {Store} from 'redux';
import {RootStoreType} from '../../Redux/redux-store';
import {addButtonMessageAC, updateNewMessageBodyAC} from '../../Redux/dialogs-reducer';

type DialogContainerPropsType = {
    store: Store<RootStoreType, any>      // type?
}

const DialogContainer = (props: DialogContainerPropsType) => {

    const onSendMessageClick = () => {
        props.store.dispatch(addButtonMessageAC())
    }

    const onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }

    let state = props.store.getState().dialogPage

    return <Dialogs updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogPage={state}
    />
        ;
};

export default DialogContainer;