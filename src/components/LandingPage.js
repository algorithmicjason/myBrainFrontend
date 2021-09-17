
import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './SignUp'
import FirstPage from './FirstPage'

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}, 
      page: ''
     };
  }
componentDidMount() {
    this.loginStatus()
  }
loginStatus = () => {
    axios.get('http://localhost:3000/logged_in', {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }
handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user,
    //   page: "home"

    })
  }

// handleLogout = () => {
//     //YOU RUN THRU THIS AS SOON AS U LAND
//     this.setState({
//     isLoggedIn: false,
//     user: {}
//     })
//   }
  




render() {
    return (
      <div>
        {this.state.isLoggedIn === false ? <h1 className={'welcome'}>WELCOME TO YOUR BRAIN</h1> : null }
        <BrowserRouter>
          <Switch>
            <Route 
              exact path='/' 
              render={props => (
              <FirstPage {...props}  handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route 
              exact path='/login' 
              render={props => (
              <Login {...props}  handleLogout={this.handleLogout} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route 
              exact path='/signUp' 
              render={props => (
              <Signup {...props}  handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route 
              exact path='/home' 
              render={props => (
              <Home {...props}  handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
    
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default LandingPage;














// import React, {Component} from 'react'
// import SignUp from './SignUp'
// import Login from './Login'
// import HomePage from './HomePage'
// import Land from './Land'


// export default class LandingPage extends Component {

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
//         .then(data => console.log(data))
//     }
//     changeToHome = () => this.setState({form: "Home"})
    
//     changeToLogin = () => this.setState({form: "Login"})

//     changeToSignUp = () => this.setState({form: "SignUp"})

//     changeToLandingPage = () => this.setState({form: "Land"})

//     render() {
//         return (
//             <div>

                
//                 {this.state.form === "Land" ? <Land changeToLogin={this.changeToLogin} changeToSignUp={this.changeToSignUp} changeToHome={this.changeToHome} /> : null }
//                 {this.state.form === "Login" ? <Login changeToHome={this.changeToHome}/> : null}
//                 {this.state.form ==="SignUp" ? <SignUp changeToHome={this.changeToHome}/> : null}
//                 {this.state.form === "Home" ? <HomePage changeToLandingPage={this.changeToLandingPage} /> : null}
//             </div>
//         )
//     }
// }

















            // <form onSubmit={this.handleSubmit} >
            //     <label>Username:</label>
            //     <input type="text" name="username" value={this.state.name} onChange={this.handleOnChange} />
            //     <label>Password:</label>
            //     <input type="password" name="password" value={this.state.password} onChange={this.handleOnChange} />
            //     <input type="submit" value="Login" />
            // </form>
    //     )
    // }





// <button onClick={this.setState({form: "Login"})}></button>
// <Login changeToLogin={this.changeToLogin}/>
// <SignUp /> 
// <button onClick={this.setState({form: "Login"})}>LOGIN</button>
// <button onClick={<SignUp />}>SIGNUP</button> 
// {this.state.form == "Login" ? <LoginPage /> : null}
// {this.state.form == "SignUp" ? <SignUp /> : null } 