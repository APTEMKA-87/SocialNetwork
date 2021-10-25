import {connect} from 'react-redux';
import {RootStateType} from '../../Redux/redux-store';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow,
    UserType
} from '../../Redux/user-reducer';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/preloader';
import {usersAPI} from '../../api/api';

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currenPage: number
    isFetching: boolean
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
}

export type ResponseType = {
    items: Array<UserType>,
    totalCount: number,
    error: string
}

class UsersContainer extends React.Component <UsersContainerPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
       usersAPI.getUsers(this.props.currenPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPostChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })
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
    }
}

export default connect(mapStateToProps,
    {
        follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
    }
)(UsersContainer);