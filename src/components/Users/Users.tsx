import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../img/user_photo.png';
import {UserType} from '../../Redux/user-reducer';
import {NavLink} from 'react-router-dom';
import {usersAPI} from '../../api/api';

type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    totalUserCount: number
    pageSize: number
    currenPage: number
    onPostChanged: (pageNumber: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: number[]
}

export type CommonType<T = {}> = {
    resultCode: number
    message: string[]
    data: T
}

const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={styles.body}>
            <div>
                {pages.map(p => {
                    return <span
                        className={props.currenPage === p && styles.selectedPage || ''}
                        onClick={() => {
                            props.onPostChanged(p)
                        }}
                    >{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                 <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                      className={styles.userPhoto} alt={''}/>
                                </NavLink>
                             </div>
                              <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(false, u.id)
                                    usersAPI.unfollow(u.id)
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                            props.toggleFollowingProgress(false, u.id)
                                        })

                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(false, u.id)
                                    usersAPI.follow(u.id)
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                            props.toggleFollowingProgress(false, u.id)
                                        })

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
    );
};

export default Users;