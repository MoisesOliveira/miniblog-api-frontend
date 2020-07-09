import React from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import Link from 'react-router-dom/Link'
import Post from './post'
export default class User extends React.Component{
    state = {
        users: []
    }
    componentDidMount(){
        const token = localStorage.getItem('token')
        axios.get('http://localhost:5000/users',{headers:{
            'x-access-token': token
        }}).then(res =>{
        console.log(res)
        this.setState({users: res.data['users']})
    })
    }
    render(){
        return(
            <div>
               <div class="header">
                    <h2><Link to="/home" className="link">Miniblog</Link></h2>
                </div>
                <Post />
            </div>
        )
    }
}