import axios from 'axios'

const baseUrl = 'https://cnodejs.org/api/v1/'
axios.interceptors.request.use(req=>{

    req.url = `${req.url}`;
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


export default axios

