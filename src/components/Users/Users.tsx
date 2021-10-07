import React from 'react';
import styles from './users.module.css'
import {UsersPropsType} from './UsersContainer';


const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.ru%2Fpin%2F648025833876393957%2F&psig=AOvVaw2oOxtnNl8H5U1LyG1pBZyI&ust=1633641843577000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLDs0IDctvMCFQAAAAAdAAAAABAD',
                    followed: false,
                    fullName: 'Jack',
                    status: 'I am boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.ru%2Fpin%2F648025833876393957%2F&psig=AOvVaw2oOxtnNl8H5U1LyG1pBZyI&ust=1633641843577000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLDs0IDctvMCFQAAAAAdAAAAABAD',
                    followed: true,
                    fullName: 'Bob',
                    status: 'I am boss too',
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
                {
                    id: 3,
                    photoUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.ru%2Fpin%2F648025833876393957%2F&psig=AOvVaw2oOxtnNl8H5U1LyG1pBZyI&ust=1633641843577000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLDs0IDctvMCFQAAAAAdAAAAABAD',
                    followed: false,
                    fullName: 'Don',
                    status: 'I am superBoss',
                    location: {city: 'Moscow', country: 'Russia'}
                },
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                            <div>
                                 <img src={u.photoUrl} className={styles.userPhoto} alt={''}/>
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
                             <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                        </span>
                    </span>
            </div>)
        }
    </div>
};

export default Users;