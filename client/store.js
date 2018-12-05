import {createStore,compose,applyMiddleware,combineReducers} from 'redux'
import thunk  from 'redux-thunk'
import {reducer as tokenReducer} from './views/login'

const middlewares = [thunk];

const storeEnhancer = compose(applyMiddleware(...middlewares))

const reducer = combineReducers({
    token:tokenReducer
})

export default  createStore(reducer,{},storeEnhancer)
