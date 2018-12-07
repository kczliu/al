
import React,{Component} from 'react'
import {Route} from 'react-router-dom';


class SubRoute extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log('subRoute',this.props)
        return(
            <Route path={this.props.path} render={()=>(
                <this.props.component routes={this.props.routes}></this.props.component>
            )}></Route>
        )
    }
}
export default  SubRoute
