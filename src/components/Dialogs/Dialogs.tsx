import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.content}>
            <div className={s.dialogItems}>
                <div className={s.dialog}>Dima</div>
                <div className={s.dialog}>Sveta</div>
                <div className={s.dialog}>Victor</div>
                <div className={s.dialog}>Valera</div>
                <div className={s.dialog}>Katya</div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hi</div>
                <div className={s.dialog}>How r u?</div>
                <div className={s.dialog}>Thank`s</div>
            </div>
        </div>
    );
};

export default Dialogs;