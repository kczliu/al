
import React from 'react'
class Item extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <p>这是细节</p>
            </div>
        )
    }
}





export default Item
