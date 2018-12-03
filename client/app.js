import React,{Component} from 'react'
import 'element-theme-default'
import {Button} from 'element-react'
import axios from './config/api'
class App extends Component{
    getDetail=()=>{
        axios.get('v1/topics').then(res=>{
            console.log(res)
        })
    }
    render(){
        return (
            <div>
                this is my webpack success <i className='el-icon-loading'></i>
                <Button type="primary" onClick={this.getDetail}>主要按钮</Button>
            </div>
        )
    }
}


export default App





