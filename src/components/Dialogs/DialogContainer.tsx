import Dialogs from './Dialogs';
import {addButtonMessageAC, updateNewMessageBodyAC} from '../../Redux/dialogs-reducer';
import {connect} from 'react-redux';
import {RootStateType} from '../../Redux/redux-store';
import {Dispatch} from 'redux';


// типизировать здесь или норм, что mapStateToProps mapDispatchToProps?

let mapStateToProps = (state: RootStateType) => {
    return {
        dialogPage: state.dialogPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {    // правильно ли я типизировал?
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: () => {
            dispatch(addButtonMessageAC())
        }
    }
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs) // ?

export default DialogContainer;