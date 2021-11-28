import React, { Component } from 'react';
import axios from 'axios'
import { Link} from 'react-router-dom' //BrowserRouter,
// import Home from "./Home"
import Dashboard from './Dashboard';



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      password: '',
      errors: '',
      page: '',
      valid: "false"
     };
  }
  // componentDidMount() {
  //   return this.props.loggedInStatus ? this.redirect() : null
  // }

handleChange = (event) => {
  event.preventDefault()
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

handleSubmit = (event) => {
    event.preventDefault()
    const {username, password} = this.state
let user = {
      username: username,
      password: password
    }
  
    
    axios.post('http://localhost:3000/login', {user}, {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.props.handleLogin(response.data)
        this.setState({valid: true})
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
    this.setState({page: "Home"})
  }

handleErrors = () => {
    return (
      <div>
        <ul>
        {this.state.errors.map(error => {
        return <li key={error}>{error}</li>
          })
        }
        </ul>
      </div>
    )
  }
 
render() {
    const {username, password} = this.state
return (
      <div className='loginpage'>
        { this.state.errors ? this.handleErrors() : null}
        {this.state.page === "Home" ? <Dashboard username={this.state.username} handleLogout={this.props.handleLogout}/> : null }
        {this.state.valid === "false" ?
         <div> 
          <h1>Log In</h1>
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
          <button placeholder="submit" type="submit">
            Log In
          </button>
          <div>
            or <Link to='/SignUp'>sign up</Link>
          </div>
          
          </form>
          
          <div className='column-quote'>
            <p className="quote">INCREASE YOUR MEMORY BY AS MUCH AS 70 PERCENT WHEN YOU GO THROUGH YOUR NOTES WITHIN 24 HOURS.</p>
          </div>
        
        </div> : null }
      </div>
    );
  }
}
export default Login;









// import React, {Component} from 'react'

// //this page has the following:
// //post request to backend to authenticate username and password
// //a login form
// export default class Login extends Component {




//     state={
//         form: "Land",
//         username: "",
//         password: ""
//     }

//     handleOnChange = (event) => {
//         this.setState({
//              username: event.target.value
//             // [event.target.username]: event.target.value
//         })
//     }

//     handleSubmit = (event) => {
//         event.preventDefault()
        
//         let user = {
//             username: this.state.username,
//             password: this.state.password
//         }

//         fetch('http://localhost:3000/login', {
//             method: "POST",
//             headers: {
//                 "Content-Type": 'application/json',
//                 "Accept": 'application/json'
//             },
//             body: JSON.stringify(user)
//         })
//         .then(res => res.json())
//         .then(data => this.props.setCurrentUser(data))
//     }

//     render(){
//         return(
            
//                     <form onSubmit={this.handleSubmit} >
//                         <label>Username:</label>
//                         <input type="text" name="username" value={this.state.username} onChange={this.handleOnChange} />
//                         <label>Password:</label>
//                         <input type="password" name="password" value={this.state.password} onChange={this.handleOnChange} />
//                         <input type="submit" value="Login" />
//                     </form>
//                 )
//             }
//         }
        
        // <div>
        //     <form>  
     
        //         <label>Username : </label>   
        //         <input type="text" placeholder="Enter Username" name="username" required />  
        //         <label>Password : </label>   
        //         <input type="password" placeholder="Enter Password" name="password" required />  
        //         <button type="submit">Login</button>     

        //     </form> 
        // </div>
    
