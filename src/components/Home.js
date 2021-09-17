import React, { Component } from 'react';
// import RenderUser from './RenderUser'  !!!!!
// import CreateThought from './CreateThought'
import RenderMyThoughts from './RenderMyThoughts' 
// import CreateFolder from './CreateFolder' 



// const API = "https://zenquotes.io/api/random" 



export default class Home extends Component{
  
  state= {
    trans: 'nine',
    addedFolders: [], 
    show: 'none'
    // thoughts: [], 
    
  }
      //!!!!!!!!!!GET THIS TO WORK!!!!!!!!!!!!

    //   componentDidMount = async () => {
    //     const res = await fetch(API)
    //     const trans = await res.json()
    //     this.setState({trans})
        
    //     this.setState({quote: trans})
    //   }
    //   addNewThought = (newThought) => {
    //     this.setState({thoughts: [...this.state.thoughts, newThought]})
    // }
    //   addNewFolder = (newFolder) => {
    //     this.setState({addedFolders: [...this.state.addedFolders, newFolder]})
    // }


  render(){

    return (
      
      <div>
          <h1 className={"bigName"}>{this.props.username}'s <span id={'bb'}>BIG </span>Brain</h1>
          {/* <button onClick={this.setState({show: "folderForm"})}>Create a Folder</button> */}
          {/* <CreateFolder show={this.state.show} user_id={this.props.user_id} addNewFolder={this.addNewFolder} /> */}
      
          <RenderMyThoughts addNewFolder={this.addNewFolder} user_id={this.props.user_id} userData={this.props.userData} username={this.props.username} myFolders={this.state.addedFolders}/>
          {/* <CreateThought user_id={this.props.user_id} /> */}
          
          {/* {this.state.trans === 'nine' ? null : this.state.trans.users.map(user => <RenderUser usernam={this.props.username} tran={user} key={user.id} /> )} */}
          {/* {console.log(this.state.trans)} */}

          {/* {this.state.trans === [] ? null : this.state.trans.users.map(tran => <RenderUser tran={tran} /> )} */}
          
      </div>
  );
};
}

/* <Navbar handleLogout={this.props.handleLogout}/>

 this.state.view === "Home" ? <Home changeToSearch={this.changeToSearch} /> : null } 
 this.state.view === "Search Container" ? <SearchContainer />: null} 
  
 
  this.props.loggedInStatus ? 
  <Link to='/logout' onClick={handleClick}>Log Out</Link> : 
  null
} */