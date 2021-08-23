import React from 'react';
import s from './../Dialogs.module.css'  // поленились и не делали отдельный css для данной компоненты, имортируем из Dialog.module.css

type MessageType = {
    message: string
}

let Message = (props: MessageType) => {
    return <div className={s.dialog}>{props.message}</div>
}

export default Message;