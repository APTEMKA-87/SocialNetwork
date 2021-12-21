import Dialogs from './Dialogs';
import {sendMessage, DialogPageType, updateNewMessageBody} from '../../Redux/dialogs-reducer';
import {connect} from 'react-redux';
import {RootStateType} from '../../Redux/redux-store';
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';

type MapStateToPropsType = {
    dialogPage: DialogPageType
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        dialogPage: state.dialogPage,

    }
}



const DialogContainer = WithAuthRedirect(connect(mapStateToProps, {updateNewMessageBody, sendMessage})(Dialogs))

export default DialogContainer;