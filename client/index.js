import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import App from './app.js'
import {AppContainer}  from 'react-hot-loader'

const root = document.getElementById('root')

const render =Component =>{
    ReactDOM.hydrate(
        <AppContainer>
            <Component></Component>
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
