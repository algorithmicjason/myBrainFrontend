// this comes from RenderMyThoughts
//this folder is just a form to create a folder
import { Component } from 'react';

const URL = 'http://localhost:3000/folders'

export default class CreateFolder extends Component {

  //attributes used to create a folder on the backend
  state= {
    title: "",
    user_id: "",
    color: "Blue", 
    show: "none",
  }

  //sends inputted Folder info from webpage to backend
  handleSubmit = (event) => {
    event.preventDefault()

    let newFolder = {
      title: this.state.title,
      user_id: this.props.user_id,
      color: this.state.color,  
    }

    let ReqObj = {
      headers: {"Content-Type": "application/json"},
      method: "POST",
      body: JSON.stringify(newFolder)
    }

    // fetch(URL, ReqObj).then(r => r.json()).then(newFolder => this.props.folders.length >1 ? this.props.addNewFolder(newFolder) : this.props.createFolder(newFolder) )
    fetch(URL, ReqObj).then(r => r.json()).then(newFolder => this.props.addNewFolder(newFolder) )
    this.setState({
      title: "",
      user_id: "",
      color: "Blue", 
    })
  event.target.reset()
  
}

    render(){
      // debugger
        return(
          <div className="create-folder-form create-form" >
  
            {/* <h2 className="create-header" >CREATE A FOLDER</h2> */}
            <form onSubmit={this.handleSubmit} className="newFolder">
              <div className="newFolderTitle">
                <label htmlFor="title" className="THISISATITLE">Title</label>
                <input onChange={event => this.setState({title: event.target.value})} type="text" className="form-control" id="newFolderTitle" placeholder="Enter Title"/>    
              </div>
                
              <div className="form-group">
                    
                <label htmlFor="color" className="THISISATITLE">Color</label>

                <select onChange={event => this.setState({color: event.target.value})}  type="text" className="form-control" id="newFolderColor"> 
                  <option key={"Blue"} value="Blue" > Blue</option>
                  <option key={"Red"} value="Red"> Red</option>
                  <option key={"Green"} value="Green"> Green</option>
                  <option key={"Yellow"} value="Yellow"> Yellow</option>
                  <option key={"Pink"} value="Pink"> Pink</option>
                  <option key={"Orange"} value="Orange"> Orange</option>
                </ select>
              </div>

              <button type="submit" id="butt">Create</button>

            </form>
              
            </div>
        )
    }
}