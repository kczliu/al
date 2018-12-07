
import React from 'react'


class Test extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <p>测试页面</p>
                <p>This is test</p>
            </div>
        )
    }
}


export default Test
