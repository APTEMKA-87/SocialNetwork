import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import MessageDialogs from './Message/Message';
import b from './../Profile/MyPosts/MyPosts.module.css'
import {DialogPageType} from '../../Redux/dialogs-reducer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

type DialogsPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: (values: string) => void
    dialogPage: DialogPageType
}

const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogPage

    let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = state.messages.map(m => <MessageDialogs messageDialog={m.message} key={m.id}/>)

    const addNewMessage = (values: any) => {    // ToDo type inputElement?
        props.sendMessage(values.newMessageBody)
    }

      return (
        <div className={s.content}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div>
                {messagesElements}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
};

type AddMessageFormType = {
    newMessageBody: string
}

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>

            <div className={s.newMessage}>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message"/>
                <button className={b.button}>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;