import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import MessageDialogs from './Message/Message';
import b from './../Profile/MyPosts/MyPosts.module.css'
import {RootStoreType} from '../../Redux/redux-store';

type DialogsPropsType = {
    store: RootStoreType
    // updateNewMessage: (body: string) => void
    // sendMessage: () => void
    // dialogPage: DialogPageType
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogElements = props.dialogPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogPage.messages.map(m => <MessageDialogs messageDialog={m.message}/>)
    let sendMessage = React.createRef<HTMLTextAreaElement>()


    let addButtonMessage = () => {
        if (sendMessage.current) {
            props.addButtonMessage(body)
            //props.dispatch(addButtonMessageAC(sendMessage.current.value))
        }
        if (sendMessage.current) {
            props.sendMessage()
            //sendMessage.current.value = ''
        }
    }

    return (
        <div className={s.content}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.newMessage}>
                    <textarea className={s.textArea} placeholder="New Message" ref={sendMessage}/>
                    <button className={b.button} onClick={addButtonMessage}>Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;