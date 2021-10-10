import Users from './Users';
import {connect} from 'react-redux';
import {RootStateType} from '../../Redux/redux-store';
import {followAC, setUsersAC, UserType} from '../../Redux/user-reducer';
import {Dispatch} from 'redux';

type TOwnProps = {}

type MapStateToPropsType = {
    users: Array<UserType>
}

type MapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(followAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect<MapStateToPropsType,MapDispatchToProps,TOwnProps ,RootStateType>(mapStateToProps, mapDispatchToProps)(Users);