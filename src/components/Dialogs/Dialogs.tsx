import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';


type DialogItemType = {
    name: string
    id: string,
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
    return (
        <div className={s.content}>
            <div className={s.dialogItems}>
                <DialogItem name="Dima" id="1"/>
                <DialogItem name="Sveta" id="2"/>
                <DialogItem name="Victor" id="3"/>
                <DialogItem name="Valera" id="4"/>
                <DialogItem name="Ignat" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How r u?"/>
                <Message message="Thank`s"/>
            </div>
        </div>
    );
};

export default Dialogs;