import {connect} from 'react-redux';
import {RootStateType} from '../../Redux/redux-store';
import {
    followSuccess,
    requestUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollowSuccess,
    UserType
} from '../../Redux/user-reducer';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/preloader';
import {compose} from 'redux';
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';
import {
    getCurrenPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount, getUsers
} from '../../Redux/users-selectors';


type UsersContainerPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currenPage: number
    isFetching: boolean
    followingInProgress: number[]
    followSuccess: (userId: number) => void,
    unfollowSuccess: (userId: number) => void,
    setCurrentPage: (currenPage: number)=> void,
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void,
    getUsers: (currenPage: number, pageSize: number)=> void,
}

export type ResponseType = {
    items: Array<UserType>,
    totalCount: number,
    error: string
}

class UsersContainer extends React.Component <UsersContainerPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currenPage, this.props.pageSize)
    }

    onPostChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   currenPage={this.props.currenPage}
                   onPostChanged={this.onPostChanged}
                   users={this.props.users}
                   follow={this.props.followSuccess}
                   unfollow={this.props.unfollowSuccess}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currenPage: number
    isFetching: boolean
    followingInProgress: number[]
}

/*let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currenPage: state.usersPage.currenPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}*/

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currenPage: getCurrenPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose <React.ComponentType> (
    WithAuthRedirect,
    connect(mapStateToProps,
        {
            followSuccess, unfollowSuccess, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers
        })
)(UsersContainer)