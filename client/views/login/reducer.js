import {SET_TOKEN} from './actionTypes'

export default (state,action)=>{
    switch (action.type){
        case SET_TOKEN:{
            return {
                token:action.token
            }
        }
        default:{
            return {
                token:''
            }
        }
    }
}
