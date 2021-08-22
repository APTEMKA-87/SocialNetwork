import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';


type DialogItemType = {
    name: string
    id: number,
}

let DialogItem = (props: DialogItemType) => {

    let path = '/dialog/' + props.id

    return <div className={s.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

type MessageType = {
    message: string
}

let Message = (props: MessageType) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = () => {

    let dialogs = [
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
    ]

    let dialogElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message message={m.message} />)

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