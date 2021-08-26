import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import MessageDialogs from './Message/Message';
import { DialogPageType } from '../../Redux/State';

/*export type MessagesType = {
    id: number,
    message: string
}

export type DialogsType ={
    id: number,
    name: string
}*/

type DialogsPropsType ={
    dialogPage: DialogPageType
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogElements = props.dialogPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogPage.messages.map(m => <MessageDialogs messageDialog={m.message} />)

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