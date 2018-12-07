
import React from 'react'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Item from'./item'
import SubRoute from '../component/subRoute'


class Detail extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log('detail',this.props)
        const {routes} = this.props
        return(
            <div>
            <Link to="/detail/item">malegebazide</Link>
                <p>这是详情</p>
                {routes.map((item, index)=>{
                    return <SubRoute key={index} {...item}></SubRoute>
                })}

            </div>
        )
    }
}





export default Detail
