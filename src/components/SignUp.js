import React, { Component } from 'react';
import axios from 'axios'
import {Link, BrowserRouter as Router, Route } from 'react-router-dom'
// import Home from './Home'
import Dashboard from './Dashboard';
import Login from './Login';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      password: '',
      password_confirmation: '',
      errors: '', 
      changeToHome: false
     };
  }

handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

handleSubmit = (event) => {
    event.preventDefault()
    const {username, password, password_confirmation} = this.state
    let user = {
      username: username,
      password: password,
      password_confirmation: password_confirmation
    }

axios.post('http://localhost:3000/users', {user}, {withCredentials: true})
    .then(response => {
      if (response.data.status === 'created') {
        this.props.handleLogin(response.data)
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  };

redirect = () => {
  // <Home />
    // this.setState({changeToHome: true})
    // <Redirect to='./Login' />
    this.props.history.push('/login')
    window.alert("Successfully created profile! Please Login 😃")
    // debugger
  }

handleErrors = () => {
    return (
      <div>
        <ul>{this.state.errors.map((error) => {
          return <li key={error}>{error}</li>
        })}</ul> 
      </div>
    )
  }

render() {
    const {username, password, password_confirmation} = this.state
return (
      <div className={'signupPage'}>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <input 
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <input
            placeholder="password confirmation"
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={this.handleChange}
          />
        
          <button placeholder="submit" type="submit">
            Sign Up
          </button>
          <span className="break">
            <br></br>
            Already have an account? <Link to='/Login'>Login</Link>
          </span>
      
        </form>
        <div>
          {
            this.state.errors ? this.handleErrors() : null
          }
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <data-quote className={"signupQuote"}><b>DID YOU KNOW: <br></br></b>"The human brain will triple its size the first year of life. ..."</data-quote>
      {this.state.changeToHome === false ? null : <Dashboard username={this.state.username} handleLogout={this.props.handleLogout}/>}
      </div>
    );
  }
}


export default Signup;










// import React, {Component} from 'react'



// export default class SignUp extends Component {
//     render(){
//         return(
//             <div>
//                 <form onSubmit={console.log('HI')}>
//                     <div class="form-row">
//                         <div class="form-group col-md-6">
//                             <label for="inputusername">Username</label>
//                             <input type="username" class="form-control" id="inputusername" placeholder="username"/>
//                         </div>
//                         <div class="form-group col-md-6">
//                             <label for="inputPassword">Password</label>
//                             <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
                        
//                             <label for="inputPassword2">Retype Password</label>
//                             <input type="password" class="form-control" id="inputPassword2" placeholder="Retype Password"/>
//                         </div>
//                     </div>
  
//                     <button type="submit" class="btn btn-primary">Sign Up</button>
//                 </form>
//             </div>
//         )
//     }

// }