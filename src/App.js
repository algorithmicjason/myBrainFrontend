
import './App.css';
import React, {Component} from 'react'
import LandingPage from './components/LandingPage'


export default class App extends Component {

  state = {
    form: 'LandingPage'
  }
  
  
  // changeToHome = () => this.setState({form: "Home"})
  
  render(){
    return (
      
      <div className="App">
        {this.state.form === "LandingPage" ? <LandingPage changeToHome={this.changeToHome} /> : null}
        {/* {this.state.form === "Home" ? <Home /> : null} */}
      </div>
    );
  }
}












//     handleOnChange = (event) => {
//         this.setState({
//              username: event.target.value
//             // [event.target.username]: event.target.value
//         })
//     }

//     handleSubmit = (event) => {
//         event.preventDefault()
        

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

















// import React, { Component } from 'react';
// import axios from 'axios'
// import {BrowserRouter, Switch, Route} from 'react-router-dom'
// import Home from './components/Home'
// import Login from './components/Login'
// import Signup from './components/SignUp'
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       isLoggedIn: false,
//       user: {}
//      };
//   }
// componentDidMount() {
//     this.loginStatus()
//   }
// loginStatus = () => {
//     axios.get('http://localhost:3000/logged_in', {withCredentials: true})
//     .then(response => {
//       if (response.data.logged_in) {
//         this.handleLogin(response)
//       } else {
//         this.handleLogout()
//       }
//     })
//     .catch(error => console.log('api errors:', error))
//   }
// handleLogin = (data) => {
//     this.setState({
//       isLoggedIn: true,
//       user: data.user
//     })
//   }
// handleLogout = () => {
//     this.setState({
//     isLoggedIn: false,
//     user: {}
//     })
//   }
// render() {
//     return (
//       <div>
//         <BrowserRouter>
//           <Switch>
//             <Route 
//               exact path='/' 
//               render={props => (
//               <Home {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn}/>
//               )}
//             />
//             <Route 
//               exact path='/login' 
//               render={props => (
//               <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
//               )}
//             />
//             <Route 
//               exact path='/signUp' 
//               render={props => (
//               <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
//               )}
//             />
//           </Switch>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }
// export default App;


// import React, { Component } from 'react';
// import axios from 'axios'
// import {BrowserRouter, Switch, Route} from 'react-router-dom' 

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       isLoggedIn: false,
//       user: {}
//      };
//   }
// componentDidMount() {
//   this.loginStatus()
// }
// loginStatus = () => {
//     axios.get('http://localhost:3001/logged_in', 
//     {withCredentials: true})    
// .then(response => {
//       if (response.data.logged_in) {
//         this.handleLogin(response)
//       } else {
//         this.handleLogout()
//       }
//     })
//     .catch(error => console.log('api errors:', error))
//   }
// handleLogin = (data) => {
//     this.setState({
//       isLoggedIn: true,
//       user: data.user
//     })
//   }
// handleLogout = () => {
//     this.setState({
//     isLoggedIn: false,
//     user: {}
//     })
//   }
  
//   render() {
//     return (
//       <div>
//          <BrowserRouter>
//           <Switch>
//             <Route exact path='/' component={}/>
//             <Route exact path='/login' component={}/>
//             <Route exact path='/signup' component={}/>
//           </Switch>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }
// export default App;


















