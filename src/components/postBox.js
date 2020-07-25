import React from 'react'
import axios from 'axios'
import './style/postbox.css'
import Comments from './Comments'
export default class PostBox extends React.Component{
    state = {
        username: '',
        content: ''
    }

    render(){
        const content = this.props.content;
        let created_at = this.props.created_at;
        created_at = created_at.slice(0,11)
        return(
            <div class="box">
                <div class="info">
                <h3><img class="profile" src="https://wallpaperaccess.com/full/1091550.jpg"></img>{this.props.name}</h3>
                <p id="date">{created_at}</p>
                </div>
                <p>{content}</p>
                <Comments post_id={this.props.post_id}/>
            </div>
        )
    }
}