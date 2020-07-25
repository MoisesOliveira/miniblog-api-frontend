import React from 'react'

export default class CommentSection extends React.Component{
    
    render(){
        return(
            <div>
                <div>
                <h6 display="inline">{this.props.name}</h6>
                <p>{this.props.content}</p>
                </div>
            </div>
        )
    }
}