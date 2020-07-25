import React from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import Link from 'react-router-dom/Link'
import Post from './post'
import PostBox from './postBox'
export default class User extends React.Component{
    state = {
        posts: []
        
    }
    getPosts = () =>{
        const token = localStorage.getItem('token')
        axios.get('http://localhost:5000/post',{headers:{
            'x-access-token': token
        }}).then(res =>{
        console.log(res)
        this.setState({posts: res.data['posts']})
    })
    }

    componentDidMount(){
        this.getPosts()
    }
    render(){
        
        return(
            <div class="home">
               <div class="header">
                    <h2 class="link"><Link to="/" class="link">Miniblog</Link></h2>
                </div>
               <Post />
               
                {this.state.posts.map(post => {return(
                    <PostBox content={post.content} created_at={post.created_at} name={post.name} post_id={post.post_id}/>
                )})}
             
            </div>
        )
    }
}

