import Dialogs from './Dialogs';
import {ActionsDialogsType, addButtonMessageAC, updateNewMessageBodyAC} from '../../Redux/dialogs-reducer';
import {connect} from 'react-redux';
import {RootStateType} from '../../Redux/redux-store';

let mapStateToProps = (state: RootStateType) => {
    return {
        dialogPage: state.dialogPage
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsDialogsType) => void) => {    // правильно ли я типизировал?
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: ()=>{
            dispatch(addButtonMessageAC())
        }
    }
}

const DialogContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)


export default DialogContainer;