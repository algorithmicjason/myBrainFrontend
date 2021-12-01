// this comes from RenderMyThoughts
//this folder renders a form to create a thought & renders all folders
import { Component } from 'react';
import SingleWrinklePage from './SingleWrinklePage'

const URL = 'http://localhost:3000/thoughts'

export default class CreateThought extends Component {
state= {
  title: "",
  description: "",
  image: "",
  folder_id: "",
  public: true,
  empty: true,
  searchText: '',
  dropdownThought: "",
  dropdownFolder: ""
}

handleChange = (event) => {
  event.preventDefault()
  this.setState({ folder_id: event.target.value });
};
handleChangeDropdown = (event) => {
  // debugger
  event.preventDefault()
  this.setState({ dropdownThought: event.target.value });
};

handleChangeDropdownReset = () => {
  this.setState({ dropdownThought: ""})
}

handleSubmit = (event) => {
  event.preventDefault()

  let newThought = {
      title: this.state.title,
      description: this.state.description,
      image: this.state.image,
      folder_id: this.state.folder_id,
      public: this.state.public,
  }
  let ReqObj = {
      headers: {"Content-Type": "application/json"},
      method: "POST",
      body: JSON.stringify(newThought)
    }


  fetch(URL, ReqObj).then(r => r.json()).then(newThought => this.props.addNewThought(newThought))

  this.setState({
    title: "",
    description: "",
    image: "",
    folder_id: "",
    public: true,
  })
  event.target.reset()
}

    render(){
      //debugger
        return(
            <div>
              {/* CREATE WRINKLE FORM */}
              <div className="create-wrinkle-form create-form">
              {/* <h2 className="create-header">CREATE A WRINKLE</h2> */}
              <form onSubmit={this.handleSubmit} className="newThought">
                <div className="newThoughtTitle" id={"t"}>
                    <label htmlFor="title" className="THISISATITLE">Title</label>
                    <input onChange={event => this.setState({title: event.target.value})} type="text" className="newThoughtInput" id="newThoughtInput" placeholder="Enter Title"/>   
                </div>
                
                <div className="newThoughtDesciption" className="newThought" id={"d"}>
                    <label htmlFor="description"></label>
                    <textarea onChange={event => this.setState({description: event.target.value})} type="textarea" className="newThoughtDescription" id="newThoughtDescription"placeholder="description" rows="1" cols="50" wrap="physical" ></textarea>
                </div>

                <div className="newThoughtFolder" id={"c"}>
                  <select onChange={this.handleChange} value={this.state.folder_id}> 
                  {this.props.onlyMyFolders.length > 0 ? <option value={""} disabled selected hidden >Choose Folder...</option> : <option value={""} disabled selected hidden >CREATE A FOLDER FIRST </option>}
                      {this.props.onlyMyFolders ? this.props.onlyMyFolders.reverse().map(
                        folder => <option value={folder.id} key={folder.id}>{folder.title}</option>)
                      : <option value={""} disabled selected hidden >CREATE A FOLDER FIRST </option>}
                  </select>
                </div>   
                    {/* <div>
                      <input type="radio" id="public" checked={this.setState({public: true})} name="public" value="true" defaultChecked/>
                      <label htmlFor="public">Public Thought</label>
                
                      <input type="radio" id="private" checked={this.setState({public: false})} name="public" value="false"/>
                      <label htmlFor="private">Private Thought</label>
                    </div> */}

                <div>
                  <select onChange={event => this.setState({public: event.target.value})}>
                    <option key={`${true}`} value={`${true}`}>Public</option>
                    <option key={`${false}`} value={`${false}`}>Private</option>
                  </select>
                </div>   

                <button type="submit" className="createWrinkleButton">Create</button>
              </form>
              </div>

              {/* <div className="form-group">
                    <label htmlFor="search-text">Search:</label>
                    <input value={this.state.searchText} onChange={event => this.setState({searchText: event.target.value})} type="text" className="form-control" id="search-text" placeholder="Search..."/>
              </div> */}





                    {/* below is all the folders */}








              <h2>Folders:</h2>
{/* instead of null make the visibility none */}
                {this.state.dropdownThought === "" ? null : <SingleWrinklePage onlyMyFolders={this.props.onlyMyFolders} wrinkleNumber={this.state.dropdownThought} handleChangeDropdown={this.handleChangeDropdownReset} />}
                {/* set this state to "" when x is clicked */}
              <div className="folder-grid">
                {console.log(this.props.onlyMyFolders)}
                {console.log(this.props.myThoughts)}
                {this.props.onlyMyFolders.map(folder => 
                  <div className="folderTitle">

                   
                    <select onChange={this.handleChangeDropdown}>
                      <option value={""} disabled selected hidden >Choose Wrinkle...</option>
{/* update folder */}   {folder.thoughts ? folder.thoughts.reverse().map(
                        wrinkle => <option value={wrinkle.id} key={wrinkle.id}>{wrinkle.title}</option> ) 
                        : null}

                    </select>
                    

                    {/* {this.setState({dropdownFolder: folder.title})} */}

                    <b>{folder.title}</b> {folder.color === "Blue" ? <img src={'https://iconarchive.com/download/i7950/hopstarter/soft-scraps/Folder-Generic-Blue.ico'} className="folderPic" alt="..." /> 
                    : folder.color === "Red" ? <img src={'https://findicons.com/files/icons/129/soft_scraps/128/folder_generic_red_01.png'} id={"red"} className="folderPic" alt="..." /> 
                    : folder.color === "Green" ? <img src={'https://iconarchive.com/download/i7676/hopstarter/scrap/Folder-Closed-Green.ico'} className="folderPic" alt="..." /> 
                    : folder.color === "Yellow" ? <img src={'https://iconarchive.com/download/i7994/hopstarter/soft-scraps/Folder.ico'} className="folderPic" alt="..." /> 
                    : folder.color === "Pink" ? <img src={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/06ea6f5c-1385-4823-923c-d72b12dade2d/d9rhdmp-d828a326-5029-488f-b292-8f92841607b7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMDZlYTZmNWMtMTM4NS00ODIzLTkyM2MtZDcyYjEyZGFkZTJkXC9kOXJoZG1wLWQ4MjhhMzI2LTUwMjktNDg4Zi1iMjkyLThmOTI4NDE2MDdiNy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.kAMkDgEbZAFPVomVOjVAVcyVBtNKQBH897a-XZ3M42M'} className="folderPic" alt="..." /> 
                    : folder.color === "Orange" ? <img src={'https://www.shareicon.net/data/2015/12/12/205163_folder_300x300.png'} className="folderPic" alt="..." /> 
                    : null }

                </div>)}

              </div>
            </div>
        )
    }
}