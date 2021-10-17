import React from 'react';
import axios from 'axios';
import {UserType} from '../../Redux/user-reducer';
import Users from './Users';

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

class UsersApiComponent extends React.Component <PropsType, any> {        // type?

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

export default UsersApiComponent;