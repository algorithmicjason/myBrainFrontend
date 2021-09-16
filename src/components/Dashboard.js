import React, { Component } from 'react'
import Home from './Home'
import Navbar from './Navbar'
import TheWorldsThoughts from './TheWorldsThoughts'
// import FollowingThoughts from './FollowingThoughts'
import WelcomePage from './WelcomePage'
// import SearchContainer from './SearchContainer'


const URL = "http://localhost:3000/users"

export default class Dashboard extends Component {


  
  state = {
    view: "WelcomePage", 
    data: "nine",
    quote: "",
    user_id: "", 
    username: "",
    user_image: "",
    // loading: false
  }
  
  componentDidMount = async () => {
    // this.setState({loading: true})
    const res = await fetch(URL)
    const data = await res.json()
    this.setState({data})
    this.whoami()
  }
  
  
  
  changeToSearch = () => this.setState({view: "Search Container"})
  changeToHome = () => this.setState({view: "Home"})
  changeToTheWorldsThoughts = () => this.setState({view: "TheWorldsThoughts"})
  // changeToFollowingThoughts = () => this.setState({view: "FollowingThoughts"})
  whoami = () => {this.state.data.users.map(user => user.username === this.props.username ? this.setState({user_id: user.id, username: user.username, user_image: user.image}) : null )}



render(){
  return (
    <div className="container">

       {/* {this.state.loading ? <h1>Data Loading...</h1> : null} */}
        <div className="child">
            <Navbar changeToHome={this.changeToHome} changeToTheWorldsThoughts={this.changeToTheWorldsThoughts} changeToFollowingThoughts={this.changeToFollowingThoughts} handleLogout={this.props.handleLogout}/>

            {  this.state.view === "WelcomePage" ? <WelcomePage user_image={this.state.user_image} userData={this.state.data} username={this.props.username}   /> : null }
            {  this.state.view === "Home" ? <Home user_image={this.state.user_image} user_id={this.state.user_id} userData={this.state.data} username={this.props.username}  /> : null }
            { this.state.view === "TheWorldsThoughts" ? <TheWorldsThoughts user_image={this.state.user_image} user_id={this.state.user_id} userData={this.state.data} />: null}
            {/* { this.state.view === "FollowingThoughts" ? <FollowingThoughts user_id={this.state.user_id} userData={this.state.data} />: null} */}
        </div>
     </div>
    )
  }
}