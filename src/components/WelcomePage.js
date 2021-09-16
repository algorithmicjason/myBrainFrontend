import { Component } from "react";
import RenderUser from './RenderUser'
// import axios from 'axios'
// import createThought from './createThought' !!!!!!



// const API = "https://zenquotes.io/api/today"




export default class WelcomePage extends Component{

  // state = {
  //   quote: "api"
  // }
  

  //     //!!!!!!!!!!GET THIS TO WORK!!!!!!!!!!!!

  //     componentDidMount = async () => {
  //       //const res = await fetch(API)
  //       const res = await axios.get(API)
  //       //.catch(error => console.log('api errors:', error))
  //       const randomQuote = await res.json()
        
        
        
  //       this.setState({quote: randomQuote})
  //     }

  render(){
    
    return (
      
      <div>
          
          <h1 className={"welcomePageName"}>Welcome {this.props.username}!</h1>
          {this.props.userData === "nine" ? null : this.props.userData.users.map(user => <RenderUser username={this.props.username} user={user} key={user.id} />)}
          {/* PUT THE API HERE */}
          {/* {console.log(this.state.trans)} */}
          {/* {this.state.trans === [] ? null : this.state.trans.users.map(tran => <RenderUser tran={tran} /> )} */}
      </div>  
      
    );
  };
}
