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

    /*let dialogs = [                // перенесли в App
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Victor'},
        {id: 4, name: 'Valera'},
        {id: 5, name: 'Ignat'},
        {id: 6, name: 'Jenya'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How r u?'},
        {id: 3, message: 'Thank`s'}
    ]*/

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