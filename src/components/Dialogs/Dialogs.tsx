import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import MessageDialogs from './Message/Message';
import { DialogPageType } from '../../Redux/State';
import n from './../Profile/MyPosts/MyPosts.module.css'

type DialogsPropsType ={
    dialogPage: DialogPageType
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogElements = props.dialogPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogPage.messages.map(m => <MessageDialogs messageDialog={m.message} />)
    let sendMessage = React.createRef<HTMLTextAreaElement>()

    let addButtonMessage = () => {
        let text = sendMessage.current?.value
        alert(text)
    }
    return (
        <div className={s.content}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea className={n.textArea} placeholder="New Message" ref={sendMessage}/>
                <button className={n.button} onClick={addButtonMessage}>Send Message</button>
            </div>
        </div>
    );
};

export default Dialogs;