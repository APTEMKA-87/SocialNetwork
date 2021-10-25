import axios from 'axios';
import {ResponseType} from '../components/Users/UsersContainer';


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
    }
}