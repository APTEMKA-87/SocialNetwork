import Dialogs from './Dialogs';
import {sendMessage, DialogPageType, updateNewMessageBody} from '../../Redux/dialogs-reducer';
import {connect} from 'react-redux';
import {RootStateType} from '../../Redux/redux-store';

type MapStateToPropsType = {
    dialogPage: DialogPageType
    isAuth: boolean
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth

    }
}

const DialogContainer = connect(mapStateToProps,
    {
        updateNewMessageBody, sendMessage
    }
)(Dialogs)

export default DialogContainer;