import axios from './api'

export const login = (params)=>{
    return axios.post('login', params)
}
