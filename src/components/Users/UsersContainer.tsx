import {connect} from 'react-redux';
import {RootStateType} from '../../Redux/redux-store';
import {follow, getUsers, setCurrentPage, toggleFollowingProgress, unfollow, UserType} from '../../Redux/user-reducer';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/preloader';

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currenPage: number
    isFetching: boolean
    followingInProgress: number[]
}

type UsersContainerPropsType = {
    users: Array<UserType>
    totalUserCount: number
    setUsers: (users: Array<UserType>) => void
    pageSize: number
    currenPage: number
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
    followingInProgress: number[]
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currenPage: number, pageSize: number) => void
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
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currenPage: state.usersPage.currenPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps,
    {
        follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers
    }
)(UsersContainer);