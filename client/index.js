import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import App from './app.js'
import {AppContainer}  from 'react-hot-loader'
import store from './store'
import {Provider} from 'react-redux'
const root = document.getElementById('root')

const render =Component =>{
    ReactDOM.hydrate(
        <AppContainer>
            <Provider store={store}>
                <Component></Component>
            </Provider>
        </AppContainer>
        ,root
    )
}
render(App)


if(module.hot){
    module.hot.accept('./app.js',()=>{
        const NextApp = require('./app.js').default
        render(NextApp)
    })
}

//ReactDOM.hydrate(<App></App>,document.getElementById('root'))
