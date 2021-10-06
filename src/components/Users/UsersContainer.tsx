import Users from './Users';
import {connect} from 'react-redux';
import {RootStateType} from '../../Redux/redux-store';
import {ActionsUsersType, followAC, setUsersAC} from '../../Redux/user-reducer';

let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsUsersType) => void) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(followAC(userId))
        },
        setUsers: (users: any) => {            // type
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);