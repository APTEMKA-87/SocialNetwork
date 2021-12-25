import Dialogs from './Dialogs';
import {sendMessage, DialogPageType} from '../../Redux/dialogs-reducer';
import {connect} from 'react-redux';
import {RootStateType} from '../../Redux/redux-store';
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose, Dispatch} from 'redux';
import React from 'react';

type MapStateToPropsType = {
    dialogPage: DialogPageType
}

type mapDispatchToPropsType ={     // ToDo type нужен ли?

}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        dialogPage: state.dialogPage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return{
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessage(newMessageBody))
        }
    }

}

export default compose <React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps), // toDo как сюда передать newMessageBody
    WithAuthRedirect
)(Dialogs)
