import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

export type MessagesType = {
    id: number,
    message: string
}

export type DialogsType ={
    id: number,
    name: string
}

type DialogsPropsType ={
    dialogs: Array<DialogsType>,
    messages: Array<MessagesType>
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message message={m.message} />)

    return (
        <div className={s.content}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;