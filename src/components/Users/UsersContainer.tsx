import {connect} from 'react-redux';
import {RootStateType} from '../../Redux/redux-store';
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from '../../Redux/user-reducer';
import {Dispatch} from 'redux';
import React from 'react';
import axios from 'axios';
import Users from './Users';

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currenPage: number
}

type MapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

type PropsType = {
    users: Array<UserType>
    totalUserCount: number
    setUsers: (users: Array<UserType>) => void
    pageSize: number
    currenPage: number
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void

}

type ResponseType = {
    items: Array<UserType>,
    totalCount: number,
    error: string
}

class UsersContainer extends React.Component <PropsType, any> {        // type?

    componentDidMount() {
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currenPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPostChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {


        return <Users totalUserCount={this.props.totalUserCount}
                      pageSize={this.props.pageSize}
                      currenPage={this.props.currenPage}
                      onPostChanged={this.onPostChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}

        />
    }
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currenPage: state.usersPage.currenPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {          // загрузка, установка юзеров
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {        // выбираем текущую страницу
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {     // сетаем кол-во юзеров по страницам
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer); //?