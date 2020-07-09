import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/Users'
import Register from './components/Register';
import Login from './components/Login'
import { Link } from 'react-router-dom';

class App extends React.Component{

getState(data){
  this.setState({token: data})
}
render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>Miniblog</h1>
        <p>Plataform to share your best ideas.</p>
        <Link to='/login' className="link"><button>Login</button></Link>
        <Link to='/register' className="link"><button>Register</button></Link>
      </header>
      <footer>
        <h3>Miniblog</h3>
      </footer>
    </div>
  );
}}

export default App;
