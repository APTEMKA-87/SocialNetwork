import axios, {AxiosResponse} from 'axios';
import {ResponseType} from '../components/Users/UsersContainer';
import {CommonType} from '../components/Users/Users';


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
        return instance.post<{}, AxiosResponse<CommonType>>(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {},)
    },
    unfollow(userId: number) {
        return instance.delete<{}, AxiosResponse<CommonType>>(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    }
}