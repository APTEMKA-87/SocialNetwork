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
}
type ResponseType = {
    items: Array<UserType>,
    totalCount: number,
    error: string
}

const Users = (props: PropsType) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get<ResponseType>('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })
        }
    }

    return <div>
        <button onClick={getUsers}>Get users</button>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                            <div>
                                 <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                      className={styles.userPhoto} alt={''}/>
                             </div>
                              <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
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
};

export default Users;