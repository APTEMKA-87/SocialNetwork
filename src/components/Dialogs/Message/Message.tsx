import React from 'react';
import s from './../Dialogs.module.css'

type MessagePropsType = {
    messageDialog: string
}

let Message = (props: MessagePropsType) => {
    return <div className={s.dialog}>{props.messageDialog}</div>
}

export default Message;