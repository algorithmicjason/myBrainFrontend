import { Component } from "react";


export default class RenderCard extends Component {

    state = {
        person: 'none',
        match: ''
        
    }

    render(){
        // {console.log(this.props.thought)}
        // {console.log(this.props.thoughts)}
        // {console.log(this.props.folder)}
        // {console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!")}

        
        return(
            <div className="RenderAllThoughts"> {//this targets whole thing 
            }
            {/* {this.props.folder.id === this.props.thought.folder_id ? this.setState({match: this.props.folder}) : null } */}
            
              <div className="postCard" >
                <div onClick={console.log(this.props.folder.title)} className="folder" >
                    <div className={"lil"}>
            <p ><b>WRINKLE:</b> <span>{this.props.thought.description}</span></p>
            </div>
                    
                    
                    {/* {this.props.folder.color === "Blue" && this.props.folder.id === this.props.thought.folder_id ? <img src={'https://iconarchive.com/download/i7950/hopstarter/soft-scraps/Folder-Generic-Blue.ico'} className="folderPic" alt="..." /> 
                    : this.props.folder.color === "Red" && this.props.folder.id === this.props.thought.folder_id ? <img src={'https://findicons.com/files/icons/129/soft_scraps/128/folder_generic_red_01.png'} className="folderPic" alt="..." /> 
                    : this.props.folder.color === "Green" && this.props.folder.id === this.props.thought.folder_id ? <img src={'https://iconarchive.com/download/i7676/hopstarter/scrap/Folder-Closed-Green.ico'} className="folderPic" alt="..." /> 
                    : this.props.folder.color === "Yellow" && this.props.folder.id === this.props.thought.folder_id  ? <img src={'https://iconarchive.com/download/i7994/hopstarter/soft-scraps/Folder.ico'} className="folderPic" alt="..." /> 
                    : this.props.folder.color === "Pink" && this.props.folder.id === this.props.thought.folder_id ? <img src={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/06ea6f5c-1385-4823-923c-d72b12dade2d/d9rhdmp-d828a326-5029-488f-b292-8f92841607b7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMDZlYTZmNWMtMTM4NS00ODIzLTkyM2MtZDcyYjEyZGFkZTJkXC9kOXJoZG1wLWQ4MjhhMzI2LTUwMjktNDg4Zi1iMjkyLThmOTI4NDE2MDdiNy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.kAMkDgEbZAFPVomVOjVAVcyVBtNKQBH897a-XZ3M42M'} className="folderPic" alt="..." /> 
                    : this.props.folder.color === "Orange" && this.props.folder.id === this.props.thought.folder_id ? <img src={'https://www.shareicon.net/data/2015/12/12/205163_folder_300x300.png'} className="folderPic" alt="..." /> 
                    : null } */}
                    {this.props.folder.color === "Blue" ? <img src={'https://iconarchive.com/download/i7950/hopstarter/soft-scraps/Folder-Generic-Blue.ico'} className="folderPic" alt="..." /> 
                    : this.props.folder.color === "Red" ? <img src={'https://findicons.com/files/icons/129/soft_scraps/128/folder_generic_red_01.png'} className="folderPic" alt="..." /> 
                    : this.props.folder.color === "Green" ? <img src={'https://iconarchive.com/download/i7676/hopstarter/scrap/Folder-Closed-Green.ico'} className="folderPic" alt="..." /> 
                    : this.props.folder.color === "Yellow"  ? <img src={'https://iconarchive.com/download/i7994/hopstarter/soft-scraps/Folder.ico'} className="folderPic" alt="..." /> 
                    : this.props.folder.color === "Pink" ? <img src={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/06ea6f5c-1385-4823-923c-d72b12dade2d/d9rhdmp-d828a326-5029-488f-b292-8f92841607b7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMDZlYTZmNWMtMTM4NS00ODIzLTkyM2MtZDcyYjEyZGFkZTJkXC9kOXJoZG1wLWQ4MjhhMzI2LTUwMjktNDg4Zi1iMjkyLThmOTI4NDE2MDdiNy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.kAMkDgEbZAFPVomVOjVAVcyVBtNKQBH897a-XZ3M42M'} className="folderPic" alt="..." /> 
                    : this.props.folder.color === "Orange" ? <img src={'https://www.shareicon.net/data/2015/12/12/205163_folder_300x300.png'} className="folderPic" alt="..." /> 
                    : null }
                    
                    
                    
                    <div className={"foldero"}>
                    <p id={'folder'} ><b>FOLDER:</b> {this.props.folder.title}</p>
                    {/* <p>{this.props.folder.date}</p> */}

                    {this.state.person === "none" ? this.setState({person: this.props.userData.users.find(user => user.id === this.props.folder.user_id).username }) :null} 
                    <p id={'user'}><b>USER:</b> {this.state.person}</p>
                    {
                        //USERNAME ^
                    }
                    </div>
                    {/* {this.props.thoughts.map(thought => thought.folder_id === this.props.folder.id ? <p>{thought.description}</p> : null )} */}
                    {/* {this.props.thought.find(thought => thought.folder_id === this.props.folder.id ? <p>{thought.description}</p> : null )} */}
                    {/* {console.log(this.props.thought)}
                    {console.log('this.props.thought ^^^')} */}


                    {/* {console.log(userProfile.id)} */}
                    {/* {this.props.userData.users.map(user => user.id === this.props.folder.user_id) ?  <h4>{this.props.userData.users.username} </h4> : null } */}
                    {/* {this.state.person === "none" ? this.setState({person: this.props.folder.find(user => user.user_id === this.props.userData) }) :null} */}
                    {/* {this.state.person === "none" ? null : <h4>{this.state.person}</h4>} */}
                    {/* {console.log(this.state.person)}
                    {console.log("whos that ^")} */}
                    {/* // {userProfile.id === this.props.folder.user_id ? <img src={this.props.userData.users.image} alt={"profile brain"} /> : null } */}
                    
                </div>
              </div>
            </div>
        )
    }
}