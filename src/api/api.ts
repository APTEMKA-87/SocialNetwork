import axios, {AxiosResponse} from 'axios';
import {ResponseType} from '../components/Users/UsersContainer';
import {CommonType} from '../components/Users/Users';
import {ProfileType} from '../Redux/profile-reducer';


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': 'aececd3b-d735-49ec-b1a0-b183ec8b6f42'
    }
})

export const usersAPI = {
    getUsers(currenPage: number, pageSize: number) {
        return instance.get<ResponseType>(`users?page=${currenPage}&count=${pageSize}`)
            .then(response => {
                    return response.data
                }
            )
    },
    follow(userId: number) {
        return instance.post<{}, AxiosResponse<CommonType>>(`follow/${userId}`, {},)
    },
    unfollow(userId: number) {
        return instance.delete<{}, AxiosResponse<CommonType>>(`follow/${userId}`)
    },
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/` + userId);
    }
}

export const authAPI = {
    me() {
        return instance.get<ProfileType>(`auth/me`)
    }
}