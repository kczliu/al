
import React from 'react'
import {
    Route,
    Redirect,
} from 'react-router-dom'

import {view as Login} from '../views/login'
import Test from '../views/test'
import Detail from '../views/detail'
import Item from '../views/item'


export default [
    {
        path:'/login',
        component:Login,
    },
    {
        path:'/detail',
        component:Detail,
        routes:[
            {
                path:'/detail/item',
                component:Item,
            }
        ]
    },
    {
        path:'/test',
        component:Test,
    },
]



/*() => (
    <div>
       <Route path="/" render={() => <Redirect to="/login" />} exact />
        <Route path="/login" component={Login} />
        <Route path="/test" component={Test} excat />
    </div>
)*/
