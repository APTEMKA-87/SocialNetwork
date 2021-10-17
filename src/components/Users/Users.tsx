import React from 'react';
import styles from './users.module.css'
import axios from 'axios';
import userPhoto from '../../img/user_photo.png'
import {UserType} from '../../Redux/user-reducer';

type PropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    totalUserCount: number
    pageSize: number
    currenPage: number
}

type ResponseType = {
    items: Array<UserType>,
    totalCount: number,
    error: string
}

class Users extends React.Component <PropsType, any> {        // type?

    componentDidMount() {
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currenPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                {pages.map(p => {
                    return  <span className={this.props.currenPage === p && styles.selectedPage || ''} >{p}</span>
                })}
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <span>
                            <div>
                                 <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                      className={styles.userPhoto} alt={''}/>
                             </div>
                              <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>}
                                </div>
                    </span>
                    <span>
                        <span>
                             <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    }
}

export default Users;