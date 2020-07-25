import React from 'react'
import axios from 'axios'
import './style/post.css'
export default class Post extends React.Component{
    state = {
        user_id: '',
        id: '',
        content: ''
    }
    generateID = () =>{
        return Math.floor(Math.random()*125)
    }
    handlePost = event =>{
        event.preventDefault()
        const {history} = this.props;
        const token = localStorage.getItem('token')
        let {id,user_id,content} = this.state;
        user_id = localStorage.getItem('user_id')
        id = this.generateID()
        axios.post('http://localhost:5000/post',{id,user_id,content},{headers:{
            'x-access-token': token}}).then( res =>{
                this.setState({content: ''})
                window.location.reload()
            }
            )
    }
    handleChange = event =>{
        this.setState({[event.target.name]:event.target.value})
    }
   
    render(){
        let content = this.state.content;
        return(
            <div>
                <form class="post" onSubmit={e => {this.handlePost(e)}}>
                    <textarea name="content" value={content} onChange={e => this.handleChange(e)} type="text" placeholder="What have you been thinking about?" required></textarea>
                    
                    <button type="submit">Send</button>
                   
                </form>
               </div>
            
        )
    }
}
