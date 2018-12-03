import React from 'react';
import {createStore,compose,applyMiddleware,combineReducers} from 'redux'
import {reducer as tokenReducer} from './views/login'



const reducer = combineReducers({
    token:tokenReducer
})

export default  createStore(reducer,{},)
