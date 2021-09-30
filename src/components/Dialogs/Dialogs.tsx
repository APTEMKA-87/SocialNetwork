import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import MessageDialogs from './Message/Message';
import b from './../Profile/MyPosts/MyPosts.module.css'
import {DialogPageType} from '../../Redux/Store';

type DialogsPropsType = {
    /*dialogPage: DialogPageType
    dispatch: (action: ActionTypes) => void
    store: Store<RootStoreType, any>      // type*/
    updateNewMessageBody: (body: string) => void,
    sendMessage: () => void,
    dialogPage: DialogPageType // type?
}

const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogPage

    let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <MessageDialogs messageDialog={m.message}/>)
    //let sendMessage = React.createRef<HTMLTextAreaElement>()
    let newMessageBody = state.newMessage

    /* let addButtonMessage = () => {
         if (sendMessage.current) {
             props.dispatch(addButtonMessageAC(sendMessage.current.value))
         }
         if (sendMessage.current) {
             sendMessage.current.value = ''
         }
     }*/

    const onSendMessageClick = () => {
        props.sendMessage()
    }

    const onNewMessageChange = (e: any) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.content}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.newMessage}>
                    {/*<textarea className={s.textArea} placeholder="New Message" ref={sendMessage}/>
                    <button className={b.button} onClick={addButtonMessage}>Send Message</button>*/}
                    <textarea className={s.textArea}
                              value={newMessageBody}
                              onChange={onNewMessageChange}
                              placeholder="Enter your message"/>
                    <button className={b.button}
                            onClick={onSendMessageClick}>Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;