import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import MessageDialogs from './Message/Message';
import b from './../Profile/MyPosts/MyPosts.module.css'
import {DialogPageType} from '../../Redux/dialogs-reducer';
import {Redirect} from 'react-router-dom';

type DialogsPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
    dialogPage: DialogPageType
    isAuth: boolean
}

const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogPage

    let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = state.messages.map(m => <MessageDialogs messageDialog={m.message} key={m.id}/>)
    let newMessageBody = state.newMessage

    const onSendMessageClick = () => {
        props.sendMessage()
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.content}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.newMessage}>
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