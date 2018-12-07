import React,{Component} from 'react'
import 'element-theme-default'
import Routes from './router'
import {Link,Route, Switch} from 'react-router-dom'
import NotFound from './views/notFound'
import SubRoute from './component/subRoute'



class App extends Component{
    render(){
        return (
            <div>
                <Link to={{
                    pathname:'/login',
                    search:'?name=liu',
                    hash:'#jing',
                    state:{
                        formDashboard:true
                    }
                }}>登陆</Link>
                <Link to={{
                    pathname:'/test',
                    search:'?money=30000',
                    hash:'#success',
                    state:{
                        formDatabord:true
                    }
                }}>test</Link>
                <Link to={{
                    pathname:'/detail',
                    search:'?money=30000',
                    hash:'#success',
                    state:{
                        formDatabord:true
                    }
                }}>详情</Link>

                <Switch>

                    {Routes.map((item,index)=>{
                    return <SubRoute key={index}  {...item} />
                })}
                    <Route component={NotFound} />

                </Switch>


            </div>
        )
    }
}

export default App





