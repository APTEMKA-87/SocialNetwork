import axios from 'axios';
import {ResponseType} from '../components/Users/UsersContainer';


export const getUsers = (currenPage: number, pageSize: number) => {
  return  axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${currenPage}&count=${pageSize}`, {withCredentials: true})
}