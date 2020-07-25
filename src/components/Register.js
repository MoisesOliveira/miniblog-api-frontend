import React from 'react';
import axios from 'axios'
import Link from 'react-router-dom/Link'
export default class Register extends React.Component{
    state = {
        id: '',
        name: '',
        email: '',
        password: '',
        response: '',
        error: ''
    }
    generateID = () =>{
        return Math.random()*12
    }

    handleSubmit = async(event) =>{
        event.preventDefault()
        let {id,name,email,password} = this.state
        id = this.generateID()
        await axios.post('http://localhost:5000/register',{id,name,email,password})
        .then(res=>{
            this.setState({response: res.data['message']})
            this.setState({link: res.data['link']})
            this.props.history.push('/')
        }).catch(res => {
            this.setState({error: 'Something went wrong! Please try again'})
        })
   }
   handleChange = event =>{
       this.setState({[event.target.name]:event.target.value})
   }
   
    render(){
        const {id,name,email,password} = this.state;
        return(
            <div>
                <div class="header">
                <h2><Link to="/" className="link">Miniblog</Link></h2>
                    </div>
                <div class="form">
                    <form onSubmit= {this.handleSubmit}>
                        
                        <label>Name: </label>
                        <input name="name" type="text" value={name} onChange={this.handleChange}/>
                        <label>Email: </label>
                        <input name="email" type="text" value={email} onChange={this.handleChange}/>
                        <label>Password: </label>
                        <input name="password" type="password"value={password} onChange={this.handleChange}/>
                        <button type="submit">Submit</button>
                    </form>
                    <h2>{this.state.error}</h2>
                </div>
            </div>
        )
    }
}