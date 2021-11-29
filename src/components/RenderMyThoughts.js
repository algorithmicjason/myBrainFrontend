//Renders 2 forms
import { Component } from "react"
import CreateFolder from './MyBrain/CreateFolder'
import CreateThought from './MyBrain/CreateThought'

const URL_Folders = 'http://localhost:3000/folders'

export default class RenderMyThoughts extends Component{

    state = {
        folders: [],
        onlyMyFolders: [],
        myThoughts: [],
    }

    componentDidMount = async () => {
        const res = await fetch(URL_Folders)
        const folders = await res.json()
        this.setState({folders: folders})
        this.findOnlyUrFolders()  
    }

    addNewThought = (newThought) => {
        this.setState({myThoughts: [newThought, ...this.state.myThoughts]})
    }
    addNewFolder = (newFolder) => {
        this.setState({folders: [...this.state.folders, newFolder] })
        this.setState({onlyMyFolders: [...this.state.onlyMyFolders, newFolder]})
    }
    findOnlyUrFolders = () => {
        this.state.folders.map(folder => folder.user_id === this.props.user_id ? this.setState({onlyMyFolders: [...this.state.onlyMyFolders, folder]}) : null ) 
    }
    
    render() {
    return (
        <div className='RenderAllThoughts greybackground'>

            
           {/* <CreateFolder user_id={this.props.user_id} onlyMyFolders={this.state.onlyMyFolders} createFolder={this.createFolder} addNewThought={this.addNewThought} addNewFolder={this.addNewFolder} folders={this.state.folders} />  */}
           <CreateFolder onlyMyFolders={this.state.onlyMyFolders} user_id={this.props.user_id} addNewFolder={this.addNewFolder} folders={this.state.folders} /> 

            {<CreateThought onlyMyFolders={this.state.onlyMyFolders} user_id={this.props.user_id} addNewThought={this.addNewThought} folders={this.state.folders} myThoughts={this.state.myThoughts} />}
            
        </div>
    )
}
}

