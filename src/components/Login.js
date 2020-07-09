import React from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import './style/login.css'

export default class Login extends React.Component{
    state={
        username: '',
        password: '',
        token: '', 
        response: '',
        user_id: ''
    }
    handleSubmit = async(event) =>{
        event.preventDefault()
        const {username,password} = this.state;
        await axios.post('http://localhost:5000/login',{},{auth: {username: username,password: password}})
        .then(res=>{
            this.setState({token: res.data['token']})
            this.setState({user_id: res.data['user_id']})
            localStorage.setItem('token',this.state.token)
            localStorage.setItem('user_id',this.state.user_id)
            this.props.history.push('/home')
            
        }).catch(res =>{
            this.setState({response: 'Login incorrect! Try again.'})
        }
        )
   }
   handleChange = event =>{
       this.setState({[event.target.name]:event.target.value})
      
   }
  
   
    render(){
        const {username,password} = this.state;
        return(
            <div class= "login">
                <div class="header">
                    <h2><Link to="/" className="link">Miniblog</Link></h2>
    
                </div>
                <div class="form">
                    <form onSubmit={this.handleSubmit}>
                        <h1>LOGIN</h1>
                        <input name="username" type="text" value={username} placeholder="username" onChange={e => this.handleChange(e)}/>
                        <input name="password" type="password"value={password} placeholder="password" onChange={e => this.handleChange(e)}/>
                        <button type="submit">Login</button>
                        </form>
                        
                    </div>
                    <div id="danger">
                        <h3 id="login-incorrect">{this.state.response}</h3>
                        </div>
                </div>
                )}
}

