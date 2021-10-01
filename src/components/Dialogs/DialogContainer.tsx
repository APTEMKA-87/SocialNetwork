import React from 'react';
import Dialogs from './Dialogs';
import {addButtonMessageAC, updateNewMessageBodyAC} from '../../Redux/dialogs-reducer';
import StoreContext from '../../StoreContext';

/*type DialogContainerPropsType = {
    store: Store
}*/

const DialogContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    const onSendMessageClick = () => {
                        store.dispatch(addButtonMessageAC())
                    }

                    const onNewMessageChange = (body: string) => {
                        store.dispatch(updateNewMessageBodyAC(body))
                    }

                    let state = store.getState().dialogPage
                    return <Dialogs updateNewMessageBody={onNewMessageChange}
                                    sendMessage={onSendMessageClick}
                                    dialogPage={state}/>
                }
            }
        </StoreContext.Consumer>
    );
};

export default DialogContainer;