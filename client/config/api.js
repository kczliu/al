import axios from 'axios'
import {Message} from 'element-react'
const baseUrl = 'http://106.75.11.152/api/';
axios.interceptors.request.use(req=>{
    req.url = `${baseUrl}${req.url}`;
    if(req.data){
        req.data = Object.assign(req.data,{
            accesstoken:'89ce32d8-6795-478b-a1c9-63132c9713c3'
        })
    }else{
        req.data = {
            accesstoken:'89ce32d8-6795-478b-a1c9-63132c9713c3'
        }
    }
    return req
})

axios.interceptors.response.use(res => {
    if (res && res.data && res.data.status==200 || res.data.status == 0) {
        return res.data //rep.data
    }else if (res && ['1','2','3','4','5'].indexOf(res.data.status)>-1){
       // store.commit(types.SET_TOKEN,'');

        Message.error('登录过期，请重新登录');
        window.location.hash = '#/login'
    } else{
        Message.error(res.data.msg)
        return res.data
    }

export default axios

